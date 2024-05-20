"use client";
import React from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
const NextBreadcrumb = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter(path => path);
    if (pathNames.length < 2) {
        return null;
    }
    return (
        <div>
            <ul className="flex gap-1">
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                        return (
                            <React.Fragment key={index}>
                                <li >
                                    <Link href={href}>{link}</Link>
                                </li>
                                {pathNames.length !== index + 1 && "/"}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NextBreadcrumb