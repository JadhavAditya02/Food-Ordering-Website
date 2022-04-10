const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const port = 80;

mongoose.connect('mongodb://localhost:27017/order')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
const orderSchema = new mongoose.Schema({
    Name: String,
    Mobile: String,
    Order: String,
    Email: String,
    Qty: String,
    Date: String,
    Address: String,
    Message: String
});
const Order = mongoose.model('Order', orderSchema);


 // For serving static files
app.use('/static', express.static('static'))

app.get('/',(_req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
  });


app.get('/signup',(_req, res) => {
    res.sendFile(path.join(__dirname+'/views/signup.html'));
  });


//404
app.get('/404', (req, res) =>{
    res.sendFile(path.join(__dirname+'/views/404.html'))
})

app.use((req, res) => {
    res.redirect('/404')
})

//Mongodb sendiing req.
app.post('/order', (req, res)=>{
    console.log(req.body);
    var myData = new Order(req.body);
    myData.save();
    res.redirect('/');
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});












