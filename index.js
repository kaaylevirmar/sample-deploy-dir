const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname,'./client/views'));
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.send('Home Page!')
})

app.get('/login',(req,res)=>{
    res.redirect('login')
})

app.listen(8000,()=>{
    console.log('Server is up and Running');
})
