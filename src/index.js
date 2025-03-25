//Punto de entrada (inicia el servidor)

const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Servidor escuvhando en el puerto', app.get('port'))
});