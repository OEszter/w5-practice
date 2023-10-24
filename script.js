import * as fs from 'node:fs'; // ES6 szintaktika, kell hozzá a package.json "type": "module"
//const fs = require('fs') // ugyanolyan importálás, mint a felette lévő sor, eze  commonJS szintaktika

/*//Synchronous (Sync) File Reading - txt fájlt 
  try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
} */


/* //Asynchronous (Async) File Reading - txt fájlt
import * as fs from 'node:fs';

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
}); */




/* //Synchronous (Sync) File Reading and JSON Parsing
try {
  const data = fs.readFileSync('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  console.log(jsonData);
} catch (err) {
  console.error('Error reading or parsing the JSON file:', err);
} */



//Asynchronous (Async) File Reading and JSON Parsing
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }
  
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error('Error parsing the JSON data:', err);
  }
});