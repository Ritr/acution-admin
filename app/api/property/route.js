import connectMongo from '@/lib/connect-mongo';
import Property from '@/models/property';
import { NextResponse } from 'next/server';
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
                $or: [
                    { name: { $regex: searchQuery, $options: 'i' } },
                    { email: { $regex: searchQuery, $options: 'i' } },
                    { phone: { $regex: searchQuery, $options: 'i' } },
                ],
            }
            : {};
        const properties = await Property.find(query)
            .sort({ [sortField]: sortOrder * 1 })
            .skip((page - 1) * limit)
            .limit(limit);
        // 根据时间判断，如果是撤回、禁止之类的状态，就跳过
        properties.map(item => {
            if (new Date(item.endDateTime) <= new Date()) {
                item.BiddingStatus = "Completed";
            } else if (new Date(item.startDateTime) >= new Date()) {
                item.BiddingStatus = "AboutToStart";
            } else {
                item.BiddingStatus = "InProgress";
            }
        });
        const totalCount = await Property.countDocuments(query);
        return NextResponse.json({ properties, totalCount });
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