const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_PROFILE}:${process.env.MONGODB_PASSWORD}@cluster0.o0lxkh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(res => {
    console.log("MongoDB Connected!");
})
.catch(err => console.log(err));
