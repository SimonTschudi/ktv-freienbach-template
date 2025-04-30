import fs from 'fs';
import path from 'path';

const distDir = './dist';
const oldFileName = 'index.html';
const newFileName = 'page.mustache';

const oldFilePath = path.join(distDir, oldFileName);
const newFilePath = path.join(distDir, newFileName);

if (fs.existsSync(oldFilePath)) {
    fs.renameSync(oldFilePath, newFilePath);
    console.log(`Renamed ${oldFileName} to ${newFileName}`);
} else {
    console.log(`File ${oldFileName} not found, skipping rename.`);
}
