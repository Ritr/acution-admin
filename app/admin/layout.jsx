"use client";
import Nav from "@/app/ui/nav";
import Header from "@/app/ui/header";

export default function Layout({ children }) {
    return (
        <div>
            <div className="max-w-[1488px] mx-auto">
                <Header></Header>
            </div>
            <div className="border-t">
                <div className="max-w-[1488px] mx-auto pt-2 px-6">
                    {/* 面包屑导航栏 */}
                    <Nav />
                    {children}
                </div>
            </div>
        </div>

    );
}