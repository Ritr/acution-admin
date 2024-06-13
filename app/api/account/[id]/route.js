import connectMongo from '@/lib/connect-mongo';
import Account from '@/models/account';
import { NextResponse } from 'next/server';
export async function PUT(request, { params }) {
    const { id } = params;
    const {
        email,
        name,
        status,
        permissions
    } = await request.json();
    const account = await Account.findById(id);
    if (account) {
        await connectMongo();
        const oldEmail = account.email;
        if (oldEmail !== email) {
            const user = await Account.findOne({ email });
            if (user) {
                return NextResponse.json({
                    error: "Email already exists."
                });
            }
        }
        account.email = email;
        account.name = name;
        account.status = status;
        account.permissions = permissions;
        await account.save();
        return NextResponse.json({ msg: "save success" });
    } else {
        return NextResponse.json({ error: "no account" });
    }
}
export async function DELETE(request, { params }) {
    const { id } = params;
    try {
        await connectMongo();
        await Account.findByIdAndDelete(id);
        return NextResponse.json({ msg: "delete success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}