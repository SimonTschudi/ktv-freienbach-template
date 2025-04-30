import fs from 'fs';
import path from 'path';

const astroDir = path.join('./dist', '_astro');

if (fs.existsSync(astroDir)) {
    fs.rmSync(astroDir, { recursive: true, force: true });
    console.log('_astro folder deleted successfully.');
} else {
    console.log('_astro folder not found, skipping cleanup.');
}
