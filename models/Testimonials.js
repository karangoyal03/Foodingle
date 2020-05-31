const mongoose =require('mongoose')

const Schema = mongoose.Schema



const TestimonialSchema = new Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    image:{
        type:String
    },
    comment:{
        type:String
    }
})


const Testimonial = mongoose.model('testimonials',TestimonialSchema)


module.exports=Testimonial