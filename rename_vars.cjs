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
      content = content.replace(/--cyan-bright/g, '--accent-bright');
      content = content.replace(/--cyan-glow/g, '--accent-glow');
      content = content.replace(/--cyan/g, '--accent');
      content = content.replace(/--border-cy/g, '--border-accent');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}
replaceInFiles(path.join(__dirname, 'src'));
console.log('Replaced all variable names.');
