
import { NextResponse } from "next/server";
const COS = require('cos-nodejs-sdk-v5');

const cos = new COS({
    SecretId: process.env.SecretId,
    SecretKey: process.env.SecretKey,
});
export async function POST(request) {
    const formData = await request.formData();
    console.log("--------------------------------------------------");
    const file = formData.get("file");
    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const data = await cos.putObject({
        Bucket: 'auction-1311516012', // 必须
        Region: 'ap-beijing',     // 存储桶所在地域，必须字段
        Key: file.name,              // 必须
        StorageClass: 'STANDARD',
        Body: buffer, // 上传文件对象
        onProgress: function (progressData) {
            console.log(JSON.stringify(progressData));
        }
    });
    if (data.err) {
        // 处理请求出错
        return NextResponse.error({ error: data.err });
    } else {
        // 处理请求成功
        return NextResponse.json({ message: "success", url: "https://" + data.Location });
    }
}
