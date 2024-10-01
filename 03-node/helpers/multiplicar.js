const fs = require( 'fs' );
var colors = require('colors')

const crearArchivo = async ( base = 5, hasta= 5, listar = false ) => {

  try {
    let salida = '';
    for ( let i = 0; i <= hasta; i++ ) {

      salida += ( `${ base } x ${ i } = ${ base * i }\n` );
    }

    if ( listar ) {

      console.log( '======================='.green);
      console.log( `    Multiplicar x${ base }`.blue); 
      console.log( '======================='.green );

      console.log( salida );
    };

    fs.writeFileSync( `./tablas/tabla-x${ base }.txt`, salida );
    return `tabla-x${ base }.txt`;
  } catch ( error ) {
    throw error;
  }




};

module.exports = {
  crearArchivo
};