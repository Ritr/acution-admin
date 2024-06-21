import UI from "./ui";
import Policy from '@/models/policy';
import connectMongo from '@/lib/connect-mongo';
const Page = async () => {
    await connectMongo();
    let policy = await Policy.findOne({});
    if (!policy) {
        policy = {}
    }
    return (
        <UI policy={JSON.parse(JSON.stringify(policy))}></UI>
    )
}
export default Page;