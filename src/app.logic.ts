import fs from 'fs';
import {yarg} from './config/plugins/args.plugin';

let outputMessage:string = '';
const {b:base, l:limite, s:showTable} = yarg;
const headerMessage:string = `
=====================================
            Tabla del ${base}
=====================================\n
`

for ( let i = 1 ; i <= limite ; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

(showTable) ? console.log(outputMessage) : null;

const outputPath = 'outputs/';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('Archivo escrito exitosamente');