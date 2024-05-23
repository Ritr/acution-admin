import connectMongo from '@/lib/connect-mongo';
import User from '@/models/user';
import { NextResponse } from 'next/server';
export async function PUT(request, { params }) {
    const { id } = params;
    const {
        email,
        countryAndRegion,
        code,
        phone,
        englishName,
        englishSurname,
        chineseName,
        chineseSurname,
        address,
        financialProof,
        status,
        promotion,
        reasonForBanning
    } = await request.json();
    const account = await User.findById(id);
    if (account) {
        await connectMongo();
        account.email = email;
        account.countryAndRegion = countryAndRegion;
        account.code = code;
        account.phone = phone;
        account.englishName = englishName;
        account.englishSurname = englishSurname;
        account.chineseName = chineseName;
        account.chineseSurname = chineseSurname;
        account.financialProof = financialProof;
        account.status = status;
        account.promotion = promotion;
        account.address = address;
        account.reasonForBanning = reasonForBanning;
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
        await User.findByIdAndDelete(id);
        return NextResponse.json({ msg: "delete success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}