import connectMongo from "@/lib/connect-mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { sendEmail } from "@/services/email";
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
    await connectMongo();
    const account = await User.findById(id);
    if (account) {
        const oldEmail = account.email;
        const oldCode = account.code;
        const oldPhone = account.phone;
        if (oldEmail !== email) {
            const user = await User.findOne({ email });
            if (user) {
                return NextResponse.json({
                    error: "Email already exists."
                });
            }
        }
        if (oldCode !== code && oldPhone !== phone) {
            const user = await User.findOne({ code, phone });
            if (user) {
                return NextResponse.json({
                    error: "Phone already exists."
                });
            }
        }
        const oldStatus = account.status;
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
        if (oldStatus !== status) {
            let subject = status + " remainder";
            let text = `Your account is ${status}.`;
            if (status === "Deactivated" && account.reasonForBanning) {
                text += `reason for banning: ${account.reasonForBanning}`;
            }
            sendEmail(account.email, subject, text);
        }
        return NextResponse.json({ msg: "save success" });
    } else {
        return NextResponse.json({ error: "no member" });
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