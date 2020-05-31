const route = require('express').Router()
const Reservation=require('../models/Reservation')

route.get('/',(req,res)=>{

    Reservation.find()
    .then((reservations)=>{
        res.status(200).send(reservations)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'could not find all reservations'
        })
    })

})


route.post('/',(req,res)=>{
    const newReservation = new Reservation({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      date: req.body.date,
      time: req.body.time,
      noofpersons: req.body.noofpersons,
      instructions: req.body.instructions,
    });

    newReservation.save()
    .then((reservation)=>{
        res.status(201).send(reservation)
    })
    .catch((err)=>{
        console.log(err);
        res.status(501).send({
            error:'could not add a new reservation'
        })
    })

})

module.exports=route