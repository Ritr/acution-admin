import connectMongo from '@/lib/connect-mongo';
import User from '@/models/user';
import { NextResponse } from 'next/server';
export async function GET(request) {
    const { searchParams } = request.nextUrl;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit") || 10;
    const searchQuery = searchParams.get("searchQuery");
    const sortField = searchParams.get("sortField") || "createdAt"; // 默认按创建时间排序
    const sortOrder = searchParams.get("sortOrder") || -1; // 默认降序
    console.log("sortOrder", sortOrder);
    console.log("sortField", sortField);
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
        const users = await User.find(query)
            .sort({ [sortField]: sortOrder * 1 })
            .skip((page - 1) * limit)
            .limit(limit);
        const totalCount = await User.countDocuments(query);
        return NextResponse.json({ users, totalCount });
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
        let user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "Email already exists" });
        }
        user = await User.findOne({ phone, code });
        if (user) {
            return NextResponse.json({ error: "Phone already exists" });
        }
        await account.save();
        return NextResponse.json({ msg: "save success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}