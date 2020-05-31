const route = require('express').Router()

const Contact = require('../models/Contact')


route.get('/',(req,res)=>{
    Contact.find()
    .then((contacts)=>{
        res.status(200).send(contacts)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'could not find contacts'
        })
    })

})


route.post('/',(req,res)=>{
    const contact = new Contact({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })

    contact.save()
    .then((contact)=>{
        res.status(201).send(contact)
    })
    .catch((err)=>{
        console.log(err)
        res.status(501).send({
            error:'could not add a new contact query'
        })
    })

})


module.exports=route;