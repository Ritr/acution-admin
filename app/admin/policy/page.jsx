import UI from "./ui";
import Policy from '@/models/policy';
const Page = async () => {
    let policy = await Policy.findOne({});
    if (!policy) {
        policy = {}
    }
    return (
        <UI policy={JSON.parse(JSON.stringify(policy))}></UI>
    )
}
export default Page;