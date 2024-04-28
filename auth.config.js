export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            // 如果用户已登录,则将其重定向到 '/home'

            // 对于其他情况,返回 true 以允许访问任何页面
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
};