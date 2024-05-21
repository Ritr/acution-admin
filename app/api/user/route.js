import connectMongo from '@/lib/connect-mongo';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
export async function GET() {
    try {
        await connectMongo();
        const users = await User.find();
        return NextResponse.json({ users });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
export async function POST(request) {
    const data = await request.json();
    console.log(data);
    try {
        return NextResponse.json({ xxx: "xxx" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}