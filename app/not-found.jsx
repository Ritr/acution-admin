import Link from 'next/link';
import Header from "@/app/ui/header";
export default function NotFound() {
    return (
        <div className="flex flex-col h-full justify-between max-w-[1488px] mx-auto">
            <Header />
            <div className="mt-24 flex gap-4 items-center justify-center" >
                <h2>Not Found</h2>
                <span>|</span>
                <Link href="/">Back Home</Link>
            </div>
        </div>

    )
}