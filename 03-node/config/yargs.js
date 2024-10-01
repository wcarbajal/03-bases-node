const argv = require( 'yargs' )
  .option( 'b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'Base para la tabla de multiplicar',
  } ).option( 'l', {
    alias: 'listar',
    type: 'boolean',    
    default: false,
    description: 'Mostrar tabla de multiplicar en consola',
  }).check((argv) => {
    if (isNaN(argv.base)) {
      throw 'La base debe ser un número';
    }
    return true;
  }).argv;


  module.exports = argv;

