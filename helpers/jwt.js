const jwt = require('jsonwebtoken');

const generarJWT = (uid, nameUser) =>{
        // Se crea el payload 
    const payload = {uid, nameUser};
    const secretKey= process.env.SECRET_JWT_SEED;
        // Se crea una promesa nueva
    return new Promise((resolve, rejct)=>{
        
        jwt.sign(payload, secretKey,{
            expiresIn:'24h'
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject(err)
            }else{
                resolve(token)

            }
        })
    })
}
module.exports={
    generarJWT
}