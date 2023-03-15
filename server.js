const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/urlshortener',{
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine','ejs')

app.get("/",(req,resp)=>{
    // resp.send("helllo");
    resp.render('index');
});

app.post('/shortUrls',(req,resp)=>{

})

app.listen(process.env.PORT || 5000);
