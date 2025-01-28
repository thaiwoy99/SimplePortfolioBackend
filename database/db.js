const mongoose = require ("mongoose")

 const CONNECTDB = async () =>{
    try {
 await mongoose.connect("mongodb+srv://abesintaiwo409:abesintaiwo@cluster0.doyvx.mongodb.net/")
   console.log("db connected sucessfully")
    }
    catch(err){
        console.log("db not connected successfully")
    }


}

module.exports = CONNECTDB