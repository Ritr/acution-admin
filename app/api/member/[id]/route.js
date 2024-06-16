import connectMongo from "@/lib/connect-mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { sendEmail } from "@/services/email";
export async function PUT(request, { params }) {
    const { id } = params;
    const json = await request.json();
    await connectMongo();
    let user = await User.findById(id).lean();

    if (user) {
        const oldEmail = user.email;
        const oldCode = user.code;
        const oldPhone = user.phone;
        if (oldEmail !== json.email) {
            const hasUser1 = await User.findOne({ email: json.email });
            if (hasUser1) {
                return NextResponse.json({
                    error: "Email already exists."
                });
            }
        }
        if (oldCode !== json.code && oldPhone !== json.phone) {
            const hasUser2 = await User.findOne({ code: json.code, phone: json.phone });
            if (hasUser2) {
                return NextResponse.json({
                    error: "Phone already exists."
                });
            }
        }
        const oldStatus = user.status;
        user = { ...user, ...json };

        await User.findByIdAndUpdate(id, user);
        if (oldStatus !== json.status) {
            let subject = "User status change reminder";
            let text = `Your user is ${json.status === "1" ? "Activated" : "Deactivated"}`;
            if (json.status === "0" && user.reasonForBanning) {
                text += `reason for banning: ${user.reasonForBanning}`;
            }
            sendEmail(user.email, subject, text);
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