const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');
/* require('express-handlebars'); */

//setting
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs')
app.use(morgan('common'))
const PORT = process.env.PORT || 3000 //serverPort
/* ruta 1 */

//routes
app.use(require('./src/routes/index.routes')) //Use Router
app.use(require('./src/routes/home.routes')) //Use Router

app.get('/prueba', (req, res)=>{
   /*  res.send("prueba") */
    const info = {datos:"texto"}
    res.render("prueba.hbs",{texto: info})
});
/* ruta 2 */
/* app.get('/home', (req, res)=> {
    res.render('index.hbs', { title: 'Express' });
}); */
/* ruta 3 */
app.post('/main', (req, res)=>{
    res.send("Welcome MAIN!")
})

/* usar json */
app.use(express.json())
/* midleware */
app.use(morgan('combined'))



app.listen(port, ()=>{
    console.log("El servidor esta activo!");
})