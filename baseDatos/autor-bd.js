const conexion = require('./conexion');
<<<<<<< HEAD
async function select() {
    try {
        const [registros] = await conexion.execute('SELECT * FROM autor');
        return registros;
    } catch (e) {
=======

async function select(){
    try{
        const [registros] = await conexion.execute('SELECT * FROM autor');
        return registros;
    }catch(e){
>>>>>>> 67d5d8c1888784dfdbb61f368511387267cc2462
        console.log('Error al consultar autores');
        console.log(e);
        throw e;
    }
}

module.exports = { select }