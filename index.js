const express          = require ('express');
const cors             = require ('cors');
const { dbConnection } = require ('./db/db');

    // Configuracion de dotenv
require('dotenv').config()

    // Constante con el puesrto proveniente de env
const port = process.env.PORT;

    // Servicor Express
const app = express()

    // Conexion a la data base
dbConnection()


    // Directorio publico
app.use(express.static('public'))
 
    //  Cors
app.use(cors());

    // Lecturaa y parseo del body
app.use(express.json());

    //Definicion de la ruta raiz, importando las rutas hijas desde auth.js
app.use('/api/auth', require('./routes/auth'))

 app.listen(port, () => {
     console.log(`Servidor corriendo por el puerto ${port}`);
 })