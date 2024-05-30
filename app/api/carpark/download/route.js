import connectMongo from "@/lib/connect-mongo";
import Bid from "@/models/bid";
import Property from "@/models/property";
import { NextResponse } from "next/server";
import { AsyncParser } from "@json2csv/node";
export async function GET() {
    try {
        await connectMongo();
        console.log("properties");
        const properties = await Property.find({ deleted: false }).populate({
            path: 'latestBid',
            options: { sort: { createdAt: -1 }, limit: 1 }
        }).lean();
        console.log(properties);
        // 根据时间判断，如果是撤回、禁止之类的状态，就跳过
        properties.map(item => {
            if (item.latestBid) {
                item.currentPrice = item.latestBid.bidPrice;
            }
            if (new Date(item.endDateTime) <= new Date()) {
                item.status = "Completed";
            } else if (new Date(item.startDateTime) >= new Date()) {
                item.status = "AboutToStart";
            } else {
                item.status = "InProgress";
            }
        });
        // 将查询结果转换为 CSV 格式
        const opts = { fields: ['_id', 'title', 'region', 'address', 'reservePrice', 'startingPrice', 'startDateTime', 'endDateTime', 'currentPrice', 'evaluationPrice', 'status'] };
        const parser = new AsyncParser(opts);
        const csv = await parser.parse(properties).promise();
        // 设置 Response 头部并返回 CSV 文件
        const readableStream = new ReadableStream({
            start(controller) {
                controller.enqueue(new TextEncoder().encode(csv));
                controller.close();
            }
        });

        return new Response(readableStream, {
            headers: {
                "Content-Type": "text/csv",
                "Content-Disposition": "attachment; filename=properties.csv"
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
export async function POST(request) {
    const {
        email,
        countryAndRegion,
        code,
        phone,
        englishName,
        englishSurname,
        chineseName,
        chineseSurname,
        password,
        address,
        financialProof,
        status,
        promotion,
        reasonForBanning
    } = await request.json();
    const account = new Property({
        email,
        countryAndRegion,
        code,
        phone,
        englishName,
        englishSurname,
        chineseName,
        chineseSurname,
        password,
        address,
        financialProof,
        status,
        promotion,
        reasonForBanning
    });
    try {
        await connectMongo();
        await account.save();
        return NextResponse.json({ msg: "save success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}