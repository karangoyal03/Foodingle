const mongoose = require('mongoose')


const Schema = mongoose.Schema


const ReservationSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phonenumber:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    noofpersons:{
        type:String
    },
    instructions:{
        type:String
    }
})

const Reservation = mongoose.model('reservations',ReservationSchema)



module.exports=Reservation