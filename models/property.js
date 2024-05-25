import { model, models, Schema } from 'mongoose';
// 註冊-1
// ．輸入資訊：*信箱（ >檢查電郵電話是否重複，電話郵箱驗證碼）、*英文名、中文名、*密碼、*確認密碼、地址，*電話
// - 選項：同意條款及細則和私隱政策（點擊轉至隱私權條款頁）
// - 選項：不同意接收推廣資訊

// > 檢查密碼與確認密碼是否一致
// 前7個屬性跟字典表value對應，所以大寫
const PropertySchema = new Schema(
    {
        LandUse: String,
        OwnershipStatus:String,
        PropertyStatus:String,
        PropertyType: String,
        Region: String,
        AuctionNature: String,
        BiddingStatus: String,
        title: String,
        address: String,
        startingPrice: Number,
        bidIncrement: Number,
        content: String,
        constructionArea: Number,
        pricePerFoot1: Number,
        practicalArea: Number,
        pricePerFoot2: Number,
        seatsAndUnits: String,
        age: Number,
        towards: String,
        floor: String,
        rooms: String,
        primarySchoolNetwork: String,
        middleSchoolNetwork: String,
        propertyAddress: String,
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
const Property = models.Property || model('Property', PropertySchema, 'properties');
export default Property;