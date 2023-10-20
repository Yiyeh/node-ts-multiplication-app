
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Es el limite de la tabla de multiplicar'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'tabla',
        describe: 'Nombre de la tabla'        
    })
    .option('d',{
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'Destino de la tabla'
    })
    .check((argv, options) => {

        if ( argv.b < 0 ) {throw 'La base tiene que ser un numero positivo';}

        return true;
        
    })
    .parseSync()