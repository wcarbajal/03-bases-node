const fs = require( 'fs' );

const crearArchivo = async ( base = 5, listar = false ) => {

  try {
    let salida = '';
    for ( let i = 0; i <= 12; i++ ) {

      salida += ( `${ base } x ${ i } = ${ base * i }\n` );
    }

    if ( listar ) {

      console.log( '=======================' );
      console.log( `    Multiplicar x${ base }` );
      console.log( '=======================' );

      console.log( salida );
    };

    fs.writeFileSync( `tabla-x${ base }.txt`, salida );
    return `tabla-x${ base }.txt`;
  } catch ( error ) {
    throw error;
  }




};

module.exports = {
  crearArchivo
};