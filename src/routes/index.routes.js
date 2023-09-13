const router = require('express').Router() //Router Express Method
    
const controller = require('../controller/index.controller') //Controller require
    
router.get('/' , controller.index) //GetRouter
    
module.exports  = router //Export Module