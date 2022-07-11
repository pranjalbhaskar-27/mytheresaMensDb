const cors = require('cors');



const express = require('express');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

const homepageController=require('./controller/homepage.controller')
app.use('/mensdata1',homepageController);

module.exports=app;