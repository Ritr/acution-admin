export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {

        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            // 如果用户已登录,则将其重定向到 '/home'
            console.log(nextUrl)
            console.log(isLoggedIn)
            const pathName = nextUrl.pathname;
            if (pathName.startsWith("/admin")) {
                if (!isLoggedIn) {
                    return false;
                }
            }
            // 对于其他情况,返回 true 以允许访问任何页面
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
};