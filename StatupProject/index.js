const express=require('express');
const app=express();
app.get('/index', (req,res)=>
{
  res.send({ Name:'Abhishek Sharma',Gender:'Male',Title:'Software Engineer'});
});

app.listen(5000);
