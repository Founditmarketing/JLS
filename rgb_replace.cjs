const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (file.endsWith('.css') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/rgba\(0,\s*196,\s*204/g, 'rgba(171, 31, 46');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}
replaceInFiles(path.join(__dirname, 'src'));
console.log('Replaced all hardcoded RGB values.');
