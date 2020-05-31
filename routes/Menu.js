const route=require('express').Router()

const Menu =require('../models/Menus')

route.get('/',(req,res)=>{
    Menu.find()
    .then((menus)=>{
        res.status(200).send(menus)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'could not find any items in menu'
        })
    })

})

route.post('/',(req,res)=>{
    const menu = new Menu({
        dishname:req.body.dishname,
        disdescription:req.body.disdescription,
        image:req.body.image,
        price:req.body.price
    })
    menu.save()
    .then((menuitem)=>{
        res.status(201).send(menuitem)
    })
    .catch((err)=>{
        console.log(err);
        res.status(501).send({
            error:'could not add new menu item in the list'
        })
    })

})

module.exports=route