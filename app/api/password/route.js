import connectMongo from "@/lib/connect-mongo";
import Code from "@/models/code";
import User from "@/models/account";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    const { email, codeId, code, password } = await request.json();
    try {
        await connectMongo();
        const codeNumber = await Code.findOne({ _id: codeId, code: code });
        if (!codeNumber) {
            return NextResponse.json({ error: "Invalid code" });
        }
        await User.findOneAndUpdate({ email }, { password });
        await Code.findOneAndDelete({ _id: codeId });
        return NextResponse.json({ msg: "Success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
