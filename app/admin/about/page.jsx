import UI from "./ui";
import About from '@/models/about';
import connectMongo from '@/lib/connect-mongo';
const Page = async () => {
    await connectMongo();
    let about = await About.findOne({});
    if (!about) {
        about = {}
    }
    return (
        <UI about={JSON.parse(JSON.stringify(about))}></UI>
    )
}
export default Page;