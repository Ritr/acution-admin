import connectMongo from '@/lib/connect-mongo';
import User from '@/models/user';
import { NextResponse } from 'next/server';
export async function GET(request) {
    const { searchParams } = request.nextUrl;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit") || 10;
    const searchQuery = searchParams.get("searchQuery");
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
        await account.save();
        return NextResponse.json({ msg: "save success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}