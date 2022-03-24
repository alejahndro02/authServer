const { check         } = require ('express-validator');
const { Router        } = require ('express');
const { crearUsuario, 
        loginUsuario, 
        renovarToken  } = require('../controllers/auth');
const { ValidarCampos } = require('../middlewares/validar-campos');

const router= Router();

    // Se crea nuevo usuario
router.post('/new',[
        check('name', 'El name es obligatorio').not().isEmpty(),        
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').isLength({min:6}),
        ValidarCampos   //Middleware personalizado 
        ], crearUsuario)

    // Login de Usuario post(ruta, middlewares, controlador) 
      //Con el metodo check se evalua que se envie el dato correspondiente  
router.post('/',[
    
          //con el metodo check y el metodo isEmail se evalua si el campo es un email
            //check(a-Evaluar, mensaje-Mostrar, )
        check('email', 'El email es obliatorio').isEmail(),

           /*con el metodo check y el metodo isLength se evalua si el campo tiene un a longitud minima de 6 caracteres*/
        check('password', 'La contraseña es obliatoria').isLength({min:6}),
        ValidarCampos    
    ],loginUsuario)


// Validar y revalidar el token
router.get('/newToken', renovarToken)

// Forma de exortar 
module.exports=router