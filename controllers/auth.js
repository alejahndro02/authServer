
// Se agrega el tipado a response
const {response} = require('express')

// Se separa la logica del archivo de routes

 const crearUsuario = (req, res=response)=> {
    console.log(res);
    // Retorna la respuesta como json
    return res.json({
        ok: true,
        msg:'Crear Usuario /new'
    })
}

const loginUsuario=(req, res=response)=> {
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