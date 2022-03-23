const express = require ('express')


// Servicor Express
 const app = express()

//Definicion de la ruta raiz, importando las rutas hijas desde auth.js
app.use('/api/auth', require('./routes/auth'))

 app.listen(4000, () => {
     console.log(`Servidor corriendo por el perto ${4000}`);
 })