import connectMongo from "@/lib/connect-mongo";
import Code from "@/models/code";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/email";

export async function GET(request) {
    const { searchParams } = request.nextUrl;
    const email = searchParams.get("email");
    try {
        await connectMongo();
        const codeNumber = await generateVerificationCode();
        const code = new Code({
            code: codeNumber
        });
        const savedCode = await code.save();
        let text = `Your validate code is ${codeNumber}.`;
        sendEmail(email, "validate code", text);
        return NextResponse.json({ codeId: savedCode._id });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
const generateVerificationCode = async () => {
    // 生成一个 6 位随机数字字符串
    let code = "";
    do {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
    } while (await codeAlreadyExists(code));
    return code;
};
const codeAlreadyExists = async (code) => {
    await connectMongo();
    const codeData = await Code.findOne({ code });
    console.log(codeData !== null);
    return codeData !== null;
};

