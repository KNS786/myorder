var express=require('express');
var app=express();
var mongoose=require('mongoose');

var {MONGOURI}=require('./config');
var PORT=process.env.PORT || 7000;

//body parser
app.use(express.json());


//mongoose connection
mongoose.connect(MONGOURI,{
     useUnifiedTopology:true,
     useNewUrlParser:true,
     useCreateIndex:true
})

mongoose.connection.on('connected',()=>{
   console.log("MongoDb connected!");
})
mongoose.connection.on('error',()=>{
   console.log("Mongo db not connected");
})


//import router
app.use('/',require('./router/createItem'));
app.use('/',require('./router/createOrder'));

//sample server
app.get('/',(req,res)=>{
    res.send("Server send data ");
})

app.listen(PORT,()=>{
   console.log(`App Running localhost: ${PORT}`);

})
