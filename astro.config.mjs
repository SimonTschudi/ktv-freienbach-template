// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    trailingSlash: 'never',
    build: {
        assets: "clubdesk/genwwwfiles",
        format: 'file'
    },
    experimental: {
        responsiveImages: true
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name?.startsWith('page') && assetInfo.name?.endsWith('.css')) {
                            return 'clubdesk/genwwwfiles/page.css';
                        }
                        return 'clubdesk/genwwwfiles/[name]-[hash][extname]';
                    },
                }
            }
        },
        optimizeDeps: {
            exclude: ['lucide-react'],
        },
    },
    integrations: []
});