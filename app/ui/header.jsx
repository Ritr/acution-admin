"use client";
import React, { useEffect } from "react"
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar } from "@nextui-org/react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { useSession, getSession } from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        async function fetchSession() {
            await getSession();
        }
        fetchSession();
    }, []);
    return (
        <Navbar className="w-full" maxWidth="full">
            <NavbarBrand>
                <p className="font-bold text-inherit">AUCTION ADMIN</p>
            </NavbarBrand>
            <NavbarContent className="gap-4" justify="start">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/admin/account" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Account Manage
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/admin/member" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Member Manage
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="relative group/sub">
                            <NavigationMenuTrigger>Auction Items Manage</NavigationMenuTrigger>
                            <div className="hidden group-hover/sub:flex absolute left-0 right-0  flex-col ">
                                <Link href="/admin/property" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Property</Link>
                                <Link href="/admin/carpark" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Car Park</Link>
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="relative group/sub">
                            <NavigationMenuTrigger>Content Manage</NavigationMenuTrigger>
                            <div className="hidden group-hover/sub:flex absolute left-0 right-0  flex-col">
                                <Link href="/admin/contact" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Contact</Link>
                                <Link href="/admin/about" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">About</Link>
                                <Link href="/admin/faq" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">FAQ</Link>
                                <Link href="/admin/policy" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Policy</Link>
                                <Link href="/admin/tagline" className="rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Tagline</Link>
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {status === "authenticated" ? (
                        // <DropdownMenu>
                        //     <DropdownMenuTrigger>
                        //         <Avatar>
                        //             <AvatarFallback>{session.user.email.substring(0, 1).toUpperCase()}</AvatarFallback>
                        //         </Avatar>
                        //     </DropdownMenuTrigger>
                        //     <DropdownMenuContent>
                        //         <DropdownMenuLabel>個人資料</DropdownMenuLabel>
                        //         <DropdownMenuSeparator />
                        //         <Link href="/logout">
                        //             <DropdownMenuLabel>登出</DropdownMenuLabel>
                        //         </Link>
                        //     </DropdownMenuContent>
                        // </DropdownMenu>
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar className="cursor-pointer" name={session.user.email.substring(0, 1).toUpperCase()} />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">
                                    <Link href="/logout">Logout</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : status === "unauthenticated" ? (
                        <Button >
                            Login
                        </Button>
                    ) : null}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header;