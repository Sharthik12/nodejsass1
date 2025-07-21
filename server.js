const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'public')));
app.get('/gethello',(req,res)=>{
    res.send("Hello NodeJS!!");
});

app.listen(3000);