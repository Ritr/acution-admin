import connectMongo from '@/lib/connect-mongo';
import User from '@/models/user';
import UI from "./ui";
const Page = async ({ params }) => {
    await connectMongo();
    let account = await User.findOne({ _id: params.id });
    return (
        <UI defaultMember={JSON.parse(JSON.stringify(account))}></UI>
    );
};
export default Page;
export const revalidate = 0;