
// Se agrega el tipado a response
const {response} = require('express')
const { validationResult } = require('express-validator')

// Se separa la logica del archivo de routes

 const crearUsuario = (req, res=response)=> {
         // Se capturan los datos del req.body
    const { name, email, password} = req.body
      // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Crear Usuario /new'
    })
}

const loginUsuario = ( req, res = response ) => {
    const errors = validationResult(req)
    console.log(errors);
    if (!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()})
    }
    // Se desctructura el req.body
    const { email, password } = req.body
    console.log(email , password);
    // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Login usuario /'
    })
}
const renovarToken= (req, res)=> {
    // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Renew Usuario'
    })
}
module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
}