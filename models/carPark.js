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
        type: String,
        region: String,
        environment:String,
        status: String,
        title: String,
        address: String,
        startingPrice: Number,
        bidIncrement: Number,
        content: String,
        startDateTime:Date,
        endDateTime:Date,
        mainImage:String,
        images:Array,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);
const CarPark = models.CarPark || model('CarPark', CarParkSchema, 'carparks');
export default CarPark;