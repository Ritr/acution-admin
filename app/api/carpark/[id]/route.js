import connectMongo from "@/lib/connect-mongo";
import Carpark from "@/models/carpark";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
    await connectMongo();
    const { id } = params;
    const jsonData = await request.json();
    const carpark = await Carpark.findById(id);
    if (carpark) {
        Object.keys(jsonData).forEach((key) => {
            carpark[key] = jsonData[key];
        });
        await carpark.save();
        return NextResponse.json({ msg: "save success" });
    } else {
        return NextResponse.json({ error: "no carPark" });
    }
}
export async function DELETE(request, { params }) {
    const { id } = params;
    try {
        await connectMongo();
        await Carpark.findByIdAndUpdate(id, { $set: { deleted: true } });
        return NextResponse.json({ msg: "delete success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}