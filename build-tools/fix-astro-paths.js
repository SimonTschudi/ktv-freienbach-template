import fs from 'fs';
import path from 'path';

const distDir = './dist';

console.log('Modifying HTML file paths...');

fs.readdirSync(distDir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(distDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove `_astro/` from asset paths
        content = content.replace(/_astro\//g, '');

        // Write the updated content back
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log('Asset paths successfully updated.');