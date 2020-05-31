const mongoose = require('mongoose')


const Schema = mongoose.Schema


const MenuSchema = new Schema({
    dishname:{
        type:String
    },
    dishdescription:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    }

})


const Menu = mongoose.model('menu',MenuSchema)


module.exports=Menu