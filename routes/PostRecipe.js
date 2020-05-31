const route=require('express').Router()

const Recipe=require('../models/PostRecipe')


route.get('/',(req,res)=>{
Recipe.find()
.then((recipes)=>{
    res.status(200).send(recipes)
})
.catch((err)=>{
    console.log(err);
    res.status(500).send({
        error:'could not find recipes that are posted by user'
    })
})

})


route.post('/',(req,res)=>{
    const recipe = new Recipe({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        recipe:req.body.recipe,
        recipeimage:req.body.recipeimage
    })
    recipe.save()
    .then((recipe)=>{
        res.status(201).send(recipe)
    })
    .catch((err)=>{
        console.log(err)
        res.status(501).send({
            error:'could not add a new recipe by user'
        })
    })
})


module.exports=route