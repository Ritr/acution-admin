import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectMongo from "@/lib/connect-mongo";
import Account from "@/models/account";
import {
    AuthError
} from "next-auth";
export const {
    handlers: {
        GET,
        POST
    },
    signIn,
    signOut,
    auth,
} = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, accountname, password, 2FA token, etc.
            credentials: {
                email: String,
                name: String,
                permissions: String,
                // abc: String,
            },
            authorize: async (credentials) => {
                let account = null;
                await connectMongo();
                account = await Account.findOne({
                    email: credentials.email
                });
                if (!account) {
                    throw new AuthError("Email not found");
                }
                console.log(credentials.email);
                console.log(credentials.password);

                account = await Account.findOne({
                    email: credentials.email,
                    password: credentials.password,
                });
                console.log(account);
                if (!account) {
                    throw new AuthError("Password error");
                }


                return account;
            },
        }),
    ],
    callbacks: {
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
});