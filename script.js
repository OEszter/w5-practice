/* import * as fs from 'node:fs'; // ES6 szintaktika, kell hozzá a package.json "type": "module"
//const fs = require('fs') // ugyanolyan importálás, mint a felette lévő sor, eze  commonJS szintaktika

try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
} */

import * as fs from 'node:fs';

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
});