const { response } = require("express")
const jwt          = require('jsonwebtoken')

const validarJWT = (req, res=response, next) => {
    const secretKey = process.env.SECRET_JWT_SEED
    //Se genera un token persnalizado 
    const token = req.header('x-token');
        if (!token){
            return res.status(401).json({
                ok:false,
                msg:"error en el token"
        })
    }
    // Evalua si el token se puede leer 
    try {
        // Se manda a llamar el JWT
        const {uid, nameUser} = jwt.verify(token, secretKey)
        console.log(uid, nameUser);
            // Se exortan los valores de uid y nameuser para poder recbirlos en el controlador 
        req.uid=uid;
        req.nameUser = nameUser
        
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'El token no es valido'
        })
        
    }

    // todo Ok
    next()
}

module.exports= {
    validarJWT
}