import UI from "./ui";
import connectMongo from '@/lib/connect-mongo';
import Contact from '@/models/contact';
const Page = async () => {
    await connectMongo();
    let contact = await Contact.findOne({});
    if (!contact) {
        contact = {}
    }
    return (
        <UI contact={JSON.parse(JSON.stringify(contact))}></UI>
    )
}
export default Page;