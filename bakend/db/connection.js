
// mongoose
const mongoose = require('mongoose');

// for localhost
// mongoose.connect('mongodb://127.0.0.1:27017/loginData', 
mongoose.connect('mongodb+srv://mukulkurwe18:jk7UyfWYRbXf6gBj@redcom.ux0yzud.mongodb.net/?retryWrites=true&w=majority&appName=Redcom', 


).then(() =>{
    console.log("Database Connection done");
}).catch(() =>{
    console.log("Something went wrong");
})