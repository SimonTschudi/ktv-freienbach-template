export const isProd = import.meta.env.PROD;
export const isDev = import.meta.env.DEV;

export const getURL = (path: string) => {
    if (isDev) {
        return '/remote/www' + path;
    }
    return path;
};