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
        server: {
            proxy: {
                '/remote/www': {
                    target: 'https://www.ktvfreienbach.ch',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/remote\/www/, ''),
                    secure: true,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (compatible; Astro-Dev-Server)',
                        'Accept': '*/*'
                    },
                    configure: (proxy, options) => {
                        proxy.on('error', (err, req, res) => {
                            console.log('Proxy error:', err);
                        });
                        proxy.on('proxyReq', (proxyReq, req, res) => {
                            console.log('Proxying request to:', proxyReq.getHeader('host') + proxyReq.path);
                        });
                    }
                }
            }
        },
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