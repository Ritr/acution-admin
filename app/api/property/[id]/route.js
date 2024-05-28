import connectMongo from "@/lib/connect-mongo";
import Property from "@/models/property";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
    await connectMongo();
    const { id } = params;
    const jsonData = await request.json();
    const property = await Property.findById(id);
    if (property) {
        Object.keys(jsonData).forEach((key) => {
            property[key] = jsonData[key];
        });
        await property.save();
        return NextResponse.json({ msg: "save success" });
    } else {
        return NextResponse.json({ error: "no account" });
    }
}
export async function DELETE(request, { params }) {
    const { id } = params;
    try {
        await connectMongo();
        await Property.findByIdAndUpdate(id, { $set: { deleted: true } });
        return NextResponse.json({ msg: "delete success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}