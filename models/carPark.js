import { model, models, Schema } from 'mongoose';
// 註冊-1
// ．輸入資訊：*信箱（ >檢查電郵電話是否重複，電話郵箱驗證碼）、*英文名、中文名、*密碼、*確認密碼、地址，*電話
// - 選項：同意條款及細則和私隱政策（點擊轉至隱私權條款頁）
// - 選項：不同意接收推廣資訊

// > 檢查密碼與確認密碼是否一致
// 前7個屬性跟字典表value對應，所以大寫
const CarParkSchema = new Schema(
    {
        landUse: String,
        environment:String,
        type:String,
        region: String,
        region1: String,
        region2: String,
        region3: String,
        status: String,
        title: String,
        traditionalChineseTitle: String,
        traditionalChineseAddress: String,
        BrokerTraditionalChineseName: String,
        traditionalChineseContent: String,
        traditionalChinesePriceList: String,

        simplifiedChineseTitle: String,
        simplifiedChineseAddress: String,
        BrokerSimplifiedChineseName: String,
        simplifiedChineseContent: String,
        simplifiedChinesePriceList: String,

        englishTitle: String,
        englishAddress: String,
        brokerEnglishName: String,
        englishContent: String,
        englishPriceList: String,

        address: String,
        startingPrice: Number,
        bidIncrement: Number,
        content: String,
        age: Number,
        startDateTime: Date,
        completionDateTime: Date,
        coverImage: Object,
        otherImages: Array,
        files: Array,
        reservePrice: String,// 底價/保留價：reserve price(不在前端顯示，但拍賣价結束時未到這個價位即流拍)
        evaluationPrice: String,
        brokerPhoneNumber: String,
        brokerEmail: String,
        brokerWeChat: String,
        deleted: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        latestBid: {
            type: Schema.Types.ObjectId,
            ref: 'Bid',
            // 可选:添加getter和setter方法,用于控制latestBid的读写逻辑
        }
    }
);
const CarPark = models.CarPark || model('CarPark', CarParkSchema, 'carparks');
export default CarPark;