const mongoose  = require("mongoose");

const dbConnection = async()=>{
    try {
       await mongoose.connect(process.env.DB_MONGO_CONNECTION, {
           useNewUrlParser:true,
           useUnifiedTopology:true,
       }) 
       console.log('DB Connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la DB')
    }
}
module.exports={
    dbConnection
}