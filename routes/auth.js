const { Router} = require ('express');
const { crearUsuario, 
        loginUsuario, 
        renovarToken} = require('../controllers/auth');

const router= Router();

// Se crea nuevo usuario
router.post('/new', crearUsuario)

// Login de Usuario

router.post('/',loginUsuario)

// Validar y revalidar el token
router.get('/renew', renovarToken)

// Forma de exortar 
module.exports=router