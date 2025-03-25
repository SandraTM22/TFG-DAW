// Variables de entorno o configuración (DB, API keys, etc.)


module.exports ={
    app:{
        //Si el pueto no está definido en node.js, va a tomar el puerto 4000
        port: process.env.PORT || 4000,
    }
}