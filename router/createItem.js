var express=require('express');
var router=express.Router();

//create Database for Items
var createItem=require('../model/createItems');

//post Admin createItem and send available Item in the hotel
router.post('/createItem',function(req,res){
    var {ItemName,ItemCost}=req.body;
    console.log(req.body);
    if(!ItemName || !ItemCost ){
       return res.status(404).json({itemErr:'please enter all item'})
    }
   var saveItem=new createItem({
        ItemName,
        ItemCost
    });
   saveItem.save(); 

     res.status(200).json({id:saveItem._id,itemname:ItemName,itemcost:ItemCost});
})

//sample data get all item
router.get('/getitem',(req,res)=>{
   return createItem.find(function(err,data){
          if(!err){
                res.send(data);
           }
    })
})


module.exports=router;