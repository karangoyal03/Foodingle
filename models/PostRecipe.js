const mongoose = require('mongoose')


const Schema = mongoose.Schema


const RecipeSchema  = new Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    recipe:{
        type:String
    },
    recipeimage:{
        type:String
    }
})


const Recipe = mongoose.model('postingrecipes',RecipeSchema)



module.exports=Recipe