const route =require('express').Router()
const Cart = require('../models/Cart')


route.get('/delete',(req,res)=>{
    Cart.deleteOne({ _id: req.query.id })
      .then(() => {
        res.send({
          message: "item was removed from cart successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        res.send("error in deleting item from cart");
      });
})


route.get('/',(req,res)=>{
    Cart.find()
    .then((cartitems)=>{
        res.status(200).send(cartitems)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'could not find the elements of cart'
        })
    })

})

route.post('/',(req,res)=>{
    const cart = new Cart({
      dishname: req.body.dishname,
      price: req.body.price,
      image: req.body.image,
      dishdescription: req.body.dishdescription
    });

    cart.save()
    .then((cartitem)=>{
        res.status(201).send(cartitem)
    })

    .catch((err)=>{
        console.log(err);
        res.status(501).send({
            error:'could not add new element to cart'
        })

    })

})


module.exports=route