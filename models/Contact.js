const mongoose = require('mongoose')

const Schema = mongoose.Schema


const ContactSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    message:{
        type:String
    }
})


const Contact = mongoose.model('contacts',ContactSchema);



module.exports=Contact