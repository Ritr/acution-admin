import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="flex flex-col h-full justify-between ">
            <div className="mt-24 flex gap-4 items-center justify-center" >
                <h2>No Permissions</h2>
                <span>|</span>
                <Link href="/">Back Home</Link>
            </div>
        </div>

    )
}