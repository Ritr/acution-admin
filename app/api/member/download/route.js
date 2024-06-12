import connectMongo from "@/lib/connect-mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { AsyncParser } from "@json2csv/node";
export async function GET() {
    try {
        await connectMongo();
        const users = await User.find().lean();
        // 将查询结果转换为 CSV 格式
        const opts = { fields: ["_id","email","englishName","englishSurname","chineseName","chineseSurname","phone","code","status","reasonForBanning","promotion"] };
        const parser = new AsyncParser(opts);
        const csv = await parser.parse(users).promise();
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
                "Content-Disposition": "attachment; filename=users.csv"
            }
        });
    } catch (error) {
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
    const account = new User({
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