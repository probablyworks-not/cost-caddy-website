import { mkdir, copyFile, cp } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const source = resolve(root, 'design-concept/v5');
const output = resolve(root, 'dist');
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'consultancy.css', 'consultancy.js']) {
  await copyFile(resolve(source, file), resolve(output, file));
}
await cp(resolve(source, 'assets'), resolve(output, 'assets'), { recursive: true });
console.log('Built current Cost Caddy website in dist/');
