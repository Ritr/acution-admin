
import { NextResponse } from "next/server";
export const authConfig = {
    pages: {
        signIn: "/login",
        nopermissions: "/nopermissions",
    },
    callbacks: {

        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // 如果用户已登录,则将其重定向到 "/home"
            const pathName = nextUrl.pathname;
            if (pathName.startsWith("/admin")) {
                console.log("isLoggedInisLoggedInisLoggedInisLoggedInisLoggedIn", isLoggedIn);
                if (!isLoggedIn) {
                    return false;
                }

                if (auth.user.permissions !== "yes") {
                    if (pathName.startsWith("/admin/account")) {
                        const url = nextUrl.clone()
                        url.pathname = "/nopermissions";
                        return NextResponse.rewrite(url);
                    }
                }
            }
            // 对于其他情况,返回 true 以允许访问任何页面
            return true;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        }
    },
    providers: [], // Add providers with an empty array for now
};