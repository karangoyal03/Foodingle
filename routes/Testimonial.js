const route = require('express').Router()

const Testimonial =require('../models/Testimonials')



route.get('/',(req,res)=>{

    Testimonial.find()
    .then((testimonials)=>{
        res.status(200).send(testimonials)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'could not find any review'
        })
    })

})


route.post('/',(req,res)=>{

    const testtimonial = new Testimonial({
        name:req.body.name,
        designation:req.body.designation,
        image:req.body.image,
        comment:req.body.comment
    })
    testtimonial.save()
    .then((testimonials)=>{
        res.status(201).send(testimonials)
    })
    .catch((err)=>{
        console.log(err)
        res.status(501).send({
            error:'could not add a new view from user'
        })
    })

})


module.exports=route