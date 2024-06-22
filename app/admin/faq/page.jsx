import UI from "./ui";
import FAQ from '@/models/faq';
import connectMongo from '@/lib/connect-mongo';
const Page = async () => {
    await connectMongo();
    let faq = await FAQ.findOne({});
    if (!faq) {
        faq = {}
    }
    return (
        <UI faq={JSON.parse(JSON.stringify(faq))}></UI>
    )
}
export default Page;