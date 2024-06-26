import connectMongo from '@/lib/connect-mongo';
import Account from '@/models/account';
import { NextResponse } from 'next/server';
export async function GET() {
    await connectMongo();
    const accounts = await Account.find({}, "_id name email permissions status");
    return NextResponse.json(accounts);
}
export async function POST(request) {
    const {
        email,
        name,
        password,
        status,
        permissions
    } = await request.json();
    const account = new Account({
        email,
        name,
        password,
        status,
        permissions
    });
    try {
        await connectMongo();
        const user = await Account.findOne({ email });
        if (user) {
            return NextResponse.json({
                error: "Email already exists."
            });
        }
        await account.save();
        return NextResponse.json({ msg: "save success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}