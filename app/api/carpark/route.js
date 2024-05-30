import connectMongo from "@/lib/connect-mongo";
import CarPark from "@/models/carPark";
import { NextResponse } from "next/server";
import json from "@/utils/carParkDic";
const getRegionText = (region1, region2, region3) => {
    let regionDes = {
        traditionalChineseRegion: "",
        simplifiedChineseRegion: "",
        englishRegion: ""
    };
    let region = json.region.find((item) => item.value === region1);
    if (region) {
        regionDes.traditionalChineseRegion += region.label1;
        regionDes.simplifiedChineseRegion += region.label2;
        regionDes.englishRegion += region.label3;
        if (region2) {
            let region2Item = region.children.find((item) => item.value === region2);
            if (region2Item) {
                regionDes.traditionalChineseRegion += `---${region2Item.label1}`;
                regionDes.simplifiedChineseRegion += `---${region2Item.label2}`;
                regionDes.englishRegion += `---${region2Item.label3}`;
                if (region3) {
                    let region3Item = region2Item.children.find((item) => item.value === region3);
                    if (region3Item) {
                        regionDes.traditionalChineseRegion += `---${region3Item.label1}`;
                        regionDes.simplifiedChineseRegion += `---${region3Item.label2}`;
                        regionDes.englishRegion += `---${region3Item.label3}`;
                    }
                }
            }
        }
    }
    return regionDes;
}
export async function GET(request) {
    const { searchParams } = request.nextUrl;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit") || 10;
    const searchQuery = searchParams.get("searchQuery");
    const sortField = searchParams.get("sortField") || "createdAt"; // 默认按创建时间排序
    const sortOrder = searchParams.get("sortOrder") || -1; // 默认降序
    try {
        await connectMongo();
        const query = searchQuery
            ? {
                deleted: false,
                $or: [
                    { region1: { $regex: searchQuery, $options: "i" } },
                    { region2: { $regex: searchQuery, $options: "i" } },
                    { region3: { $regex: searchQuery, $options: "i" } },
                    { englishAddress: { $regex: searchQuery, $options: "i" } },
                ],
            }
            : { deleted: false };
        const properties = await CarPark.find(query)
            .sort({ [sortField]: sortOrder * 1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();
        // 根据时间判断，如果是撤回、禁止之类的状态，就跳过
        const result = properties.map(item => {
            console.log(new Date(item.completionDateTime));
            console.log(new Date());
            console.log(new Date(item.completionDateTime) >= new Date());
            // console.log(new Date(item.startDateTime) <= new Date());
            if (new Date(item.completionDateTime) <= new Date()) {
                item.status = "Completed";
            } else if (new Date(item.completionDateTime) >= new Date() && new Date(item.startDateTime) <= new Date()) {
                item.status = "InProgress";
            } else {
                item.status = "AboutToStart";
            }
            return { ...item, regionDes: getRegionText(item.region1, item.region2, item.region3) }
        });
        const totalCount = await CarPark.countDocuments(query);
        return NextResponse.json({ properties: result, totalCount });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
export async function POST(request) {
    const params = await request.json();
    const carPark = new CarPark(params);
    try {
        await connectMongo();
        await carPark.save();
        return NextResponse.json({ msg: "save success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}