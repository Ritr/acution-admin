"use client";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, } from "@nextui-org/navbar";
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
import Nav from "@/app/ui/nav";

export default function Layout({ children }) {
    return (
        <div>
            <div className="max-w-[1488px] mx-auto">
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
                        <NavbarItem className="hidden lg:flex">
                            Login
                        </NavbarItem>
                        <NavbarItem>
                            {/* <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button> */}
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
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