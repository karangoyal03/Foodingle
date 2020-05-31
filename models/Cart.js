const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CartSchema = new Schema({
    dishname:{
        type:String
    }
    ,price:{
        type:Number
    },
    image:{
        type:String
    }
    ,dishdescription:{
        type:String
    }

})


const Cart = mongoose.model('cart',CartSchema)


module.exports=Cart