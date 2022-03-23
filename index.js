const express = require ('express');
const cors    = require('cors');


// Servicor Express
 const app = express()
 
//  Cors
app.use(cors());

// Lecturaa y parseo del body

app.use(express.json());

//Definicion de la ruta raiz, importando las rutas hijas desde auth.js
app.use('/api/auth', require('./routes/auth'))

 app.listen(4000, () => {
     console.log(`Servidor corriendo por el perto ${4000}`);
 })