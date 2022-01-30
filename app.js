const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth');
const hbs = require('hbs')
const cors =require('cors');
const path = require('path');

const app = express();
app.set("view engine","hbs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
const state = path.join(__dirname) ;
app.use('/views',express.static(__dirname+'/views'));

app.use(authRoutes);
    
mongoose.connect("mongodb+srv://golchi:golchi@cluster0.ho3dt.mongodb.net/smartcity",()=>{
    console.log('connected');
    app.listen(3030);
});
