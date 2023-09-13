const controller = {} // Controller
    
controller.index = (req , res)=>{ //function controller
    res.send('Bienvenidos al Home!')
    // Controller code here
}
    
module.exports = controller //Export Module
