const express = require ('express')


// Servicor Express
 const app = express()

//  Peciion Get

app.get('/',(req,res)=>{
    console.log();
    res.json({
        ok:true,
        msg:'Todo Bien',
        uid:2321
    })
})

 app.listen(4000, () => {
     console.log(`Servidor corriendo por el perto ${4000}`);
 })