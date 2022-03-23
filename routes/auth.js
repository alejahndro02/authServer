const {Router} = require ('express');

const router= Router();

// Se crea nuevo usuario
router.post('/new', (req, res)=> {
    console.log(res);
    // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Crear Usuario /new'
    })
})

// Login de Usuario

router.post('/', (req, res)=> {
    // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Login usuario /'
    })
})

// Validar y revalidar el token
router.get('/renew', (req, res)=> {
    // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Renew Usuario'
    })
})

// Forma de exortar 
module.exports=router