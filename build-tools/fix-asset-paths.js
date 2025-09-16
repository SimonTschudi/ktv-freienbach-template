import fs from 'fs';
import path from 'path';

const distDir = './dist';

fs.readdirSync(distDir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(distDir, file);
        let html = fs.readFileSync(filePath, 'utf8');
        // Replace both /outdir/genwwwfiles/... and outdir/genwwwfiles/... with genwwwfiles/...
        html = html.replace(/\/?outdir\/genwwwfiles\//g, 'genwwwfiles/');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Fixed asset paths in ${file}`);
    }
});
