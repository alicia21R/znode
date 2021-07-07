//DEPENDENCIES
const express = require('express');
const path = require('path'); 
const index= require('./routes/index');   
const aboutRoute= require('./routes/about');   
const loginRoute= require('./routes/login')
const registerRoute= require('./routes/register')
const trackerRoute= require('./routes/tracker')
const cmRoute= require('./routes/costmonitor')
const bookingRoute= require('./routes/booking')
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
app.use('/about',aboutRoute);
app.use('/login',loginRoute);
app.use('/register',registerRoute);
app.use('/tracker',trackerRoute);
app.use('/cost-Monitor',cmRoute);
app.use('/booking',bookingRoute);

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

//LISTENING ON SERVER
app.listen(3800, ()=> console.log("Listening on Port 3800!!!"));