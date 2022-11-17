const { Router } = require('express');
const router = Router();
const tablaAutor = require('./../baseDatos/autor-bd');

<<<<<<< HEAD
router.get("/", async (peti, resp) => {
    try {
        const listaAutores = await tablaAutor.select();
        resp.json(listaAutores);
    } catch (e) {
=======
router.get("/", async (peti, resp)=>{
    try{
        const listaAutores = await tablaAutor.select();
        resp.json(listaAutores);
    }catch(e){
>>>>>>> 67d5d8c1888784dfdbb61f368511387267cc2462
        console.log('Error al manejar GET de autor');
        console.log(e);
        resp.status(500).send(e.message);
    }
});

<<<<<<< HEAD
module.exports = router
=======
module.exports = router;
>>>>>>> 67d5d8c1888784dfdbb61f368511387267cc2462
