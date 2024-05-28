import connectMongo from '@/lib/connect-mongo';
import Property from '@/models/property';
import UI from "./ui";
const Page = async ({ params }) => {
    await connectMongo();
    const property = await Property.findOne({ _id: params.id });
    return (
        <UI defaultProperty={JSON.parse(JSON.stringify(property))}></UI>
    );
};
export default Page;
export const revalidate = 0;