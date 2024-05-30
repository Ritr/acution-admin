import connectMongo from '@/lib/connect-mongo';
import CarPark from '@/models/carPark';
import UI from "./ui";
const Page = async ({ params }) => {
    await connectMongo();
    const carpark = await CarPark.findOne({ _id: params.id });
    return (
        <UI defaultProperty={JSON.parse(JSON.stringify(carpark))}></UI>
    );
};
export default Page;
export const revalidate = 0;