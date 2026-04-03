const https = require('https');

https.get('https://www.jlslandscapes.com/gallery', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const rx = /https:\/\/cdn\.prod\.website-files\.com\/[^"\'\s>]+\.(?:jpg|jpeg|png)/gi;
    const matches = Array.from(new Set(data.match(rx) || []));
    console.log(matches.join('\n'));
  });
});
