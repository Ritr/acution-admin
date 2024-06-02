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
                // email: {},
                password: {},
                // name: String,
                // abc: String,
            },
            authorize: async (credentials) => {
                console.log(credentials);
                let account = null;
                await connectMongo();
                account = await Account.findOne({
                    email: credentials.email
                });
                if (!account) {
                    throw new AuthError("Email not found");
                }
                account = await Account.findOne({
                    email: credentials.email,
                    password: credentials.password,
                });
                if (!account) {
                    throw new AuthError("Password error");
                }


                return account;
            },
        }),
    ],
    callbacks: {
        async session({
            session,
            token
        }) {
            session.account = token.account;
            return session;
        },
        async jwt({
            token,
            account
        }) {
            if (account) {
                token.account = account;
            }
            return token;
        },
    },
});