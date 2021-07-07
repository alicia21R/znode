//DEPENDENCIES
const express = require('express');
const path = require('path'); 
const index= require('./routes/index');   

//INSTANTIATION
const app = express();

//CONFIGURATION FOR THE TEMPLATE ENGINE: PUG
app.set('view engine', 'pug');
app.set('views', './views');

//MIDDLE WARE
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public'))); 
//ROUTES
app.use('/',index);

//LISTENING ON SERVER
app.listen(3800, ()=> console.log("Listening on Port 3800!!!"));