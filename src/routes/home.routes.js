const router = require('express').Router() //Router Express Method
    
const controller = require('../controller/home.controller') //Controller require
    
router.get('/home' , controller.index) //GetRouter
    
module.exports  = router //Export Module