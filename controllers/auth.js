
// Se agrega el tipado a response
const { response } = require('express');
const Usuario = require('../models/Usuario');

// Se separa la logica del archivo de routes
    // Se agrega el async para hacela una promesa y tlizar el await 
 const crearUsuario = async(req, res=response)=> {
 
       // Se capturan los datos del req.body
    const { nameUser, email, password} = req.body
    try {
        // Verificar si no hay un correo igual
    const usuario = await Usuario.findOne({email})
    
    if (usuario){
        return res.status(400).json({
            ok: false,
            msg:'El email ya existe en la base de datos '
        });
    }
    //Usuario con el modelo 
    const usuarioDb= new Usuario(req.body);
    
    // Encriptar mediante Hash la contraseña
    
    // Generar el JsonWebToken

        //Crear usuarion en la DB
    await usuarioDb.save()
    // Generar respuesta Exitosa
        return res.status(201).json({
            ok:true,
            uid:usuarioDb.id,
            nameUser,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:'Algo salio mal, hable con el Administrador'
        })
    }

      // Retorna la respuesta como json

}

const loginUsuario = ( req, res = response ) => {

    // Se desctructura el req.body
    const { email, password } = req.body
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