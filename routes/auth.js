const { check        } = require ('express-validator');
const { Router       } = require ('express');
const { crearUsuario, 
        loginUsuario, 
        renovarToken } = require('../controllers/auth');

const router= Router();

    // Se crea nuevo usuario
router.post('/new', crearUsuario)

    // Login de Usuario
      //Con el metodo check se evalua que se envie el dato correspondiente  
router.post('/', 
    [
            //con el metodo check y el metodo isEmail se evalua si el campo es un email
        check('email', 'El email es obliatorio').isEmail(),

           /*con el metodo check y el metodo isLength se evalua si el campo tiene un a longitud minima de 6 caracteres*/
        check('password', 'La contraseña es obliatoria').isLength({min:6})
    ],
    loginUsuario
)

// Validar y revalidar el token
router.get('/renew', renovarToken)

// Forma de exortar 
module.exports=router