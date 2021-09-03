// n failu skaitymas. Kadangi naudojam .mjs (module js) nereikia atskiros async funkcijos await'ams sudeti.
// Visus await galime vykdyti iskart main kode.

import * as fs from "fs/promises";
let allData = '';

try {
    allData = 
    await fs.readFile('a.txt', {encoding: 'UTF-8'}) +
    await fs.readFile('b.txt', {encoding: 'UTF-8'}) +
    await fs.readFile('c.txt', {encoding: 'UTF-8'})
}
catch(error) {
    console.log(error);
}

console.log( allData );
