import { model, models, Schema } from 'mongoose';
// 註冊-1
// ．輸入資訊：*信箱（ >檢查電郵電話是否重複，電話郵箱驗證碼）、*英文名、中文名、*密碼、*確認密碼、地址，*電話
// - 選項：同意條款及細則和私隱政策（點擊轉至隱私權條款頁）
// - 選項：不同意接收推廣資訊

// > 檢查密碼與確認密碼是否一致
const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: {
                value: true,
                message: 'Email already exists'
            }
        },
        countryAndRegion: String,
        code: String,
        phone: String,
        englishName: String,
        englishSurname: String,
        chineseName: String,
        chineseSurname: String,
        password: { type: String, select: false },
        address: String,
        addressProof: Array,
        addressProofStatus: String,
        idCard: Array,
        idCardStatus: String,
        financialProof: String,
        promotion: {
            type: Boolean,
            default: true,
        },
        status: String,// 未审核 已通过 停用中
        reasonForBanning: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
        // 添加一个复合唯一索引
        uniqueFields: {
            type: [String],
            required: true,
            unique: true
        }
    }
);
UserSchema.index({ code: 1, phone: 1 }, {
    unique: {
        value: true,
        message: 'Phone already exists'
    }
});
const User = models.User || model('User', UserSchema, 'users');


export default User;