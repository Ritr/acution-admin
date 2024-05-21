import connectMongo from '@/lib/connect-mongo';
import Account from '@/models/account';
import UI from "./ui";
const Page = async ({ params }) => {
    await connectMongo();
    const account = await Account.findOne({ _id: params.id });
    return (
        <UI defaultAccount={JSON.parse(JSON.stringify(account))}></UI>
    );
};
export default Page;
export const revalidate = 0;