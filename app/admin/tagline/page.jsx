import UI from "./ui";
import connectMongo from '@/lib/connect-mongo';
import Tagline from '@/models/tagline';
const Page = async () => {
    await connectMongo();
    let tagline = await Tagline.findOne({});
    if (!tagline) {
        tagline = {}
    }
    return (
        <UI tagline={JSON.parse(JSON.stringify(tagline))}></UI>
    )
}
export default Page;