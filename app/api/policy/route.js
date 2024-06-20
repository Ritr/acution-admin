import connectMongo from '@/lib/connect-mongo';
import Policy from '@/models/policy';
import { NextResponse } from 'next/server';
export async function GET() {
    await connectMongo();
    const accounts = await Policy.find({});
    return NextResponse.json(accounts);
}
export async function POST(request) {
    const {
        traditionalChinesContent,
        simplifiedChinesContent,
        englishContent
    } = await request.json();
    await connectMongo();
    try {
        // 更新最新一条数据或者创建一条新数据
        await Policy.findOneAndUpdate(
            {}, // 查询条件,这里留空表示查找所有
            {
                $set: {
                    // 要更新的字段及其值
                    traditionalChinesContent,
                    simplifiedChinesContent,
                    englishContent
                }
            },
            {
                // 选项配置
                upsert: true // 如果没有找到匹配的数据,则创建一条新数据
            }
        );
        return NextResponse.json({ msg: "success" });
    } catch (error) {
        return NextResponse.json({ error });
    }
}