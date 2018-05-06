//calling the express package
const express=require('express');

const app=express(); // in app object we have all the features of express

// route handler with error function(which have request and response object)
app.get('/', (req,res)=>
{
  res.send({ Name:'Abhishek Sharma',Gender:'Male',Title:'Software Engineer'});
});

//now if you want to deploy your app(code) into server(Heroku(currentky for this app we are using),AWS,MICROSOFT AZURE)
// to listen heroku port
 const PORT=process.env.PORT || 5000; // if heroku port not avialable then it will go for 5000 port(OR condition)

//opening port for listining http request
app.listen(PORT);

//Heroku APP link which we created using heroku CLI
// https://pacific-anchorage-30209.herokuapp.com/ | https://git.heroku.com/pacific-anchorage-30209.git
