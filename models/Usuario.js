const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nameUser:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
module.exports = model('Usuario', UsuarioSchema)