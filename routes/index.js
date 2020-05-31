const route=require('express').Router()

const cartroute=require('../routes/Cart')

const Contactroute=require('../routes/Contact')


const menuroute=require('../routes/Menu')


const postreciperoute=require('../routes/PostRecipe')



const Reservationroute=require('../routes/Reservation')


const testimonialroute=require('../routes/Testimonial')

route.use('/cart',cartroute)

route.use('/contact',Contactroute)

route.use('/menu',menuroute)

route.use('/postrecipe',postreciperoute)


route.use('/reservation',Reservationroute)


route.use('/testimonial',testimonialroute)

module.exports=route