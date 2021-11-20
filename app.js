const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const port = 80;

async function main() {
    await mongoose.connect('mongodb://localhost:27017/order');
}

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

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use('/images', express.static(__dirname + '../static/images'))
app.use('/js', express.static(__dirname + 'static/js'))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index.pug', params);
})

app.post('/order', (req, res)=>{
    var myData = new Order(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})
    // res.redirect('/');
})


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});




