import { model, models, Schema } from 'mongoose';
const CodeSchema = new Schema(
    {
        code: String,// 競價目標
        expiresAt: {
            type: Date,
            default: Date.now,
            index: { expires: '5m' }
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);
const Code = models.Code || model('Code', CodeSchema, 'codes');
export default Code;
