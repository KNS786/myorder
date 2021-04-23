var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');

var createOrder=require('../model/createOrder');
var ItemsList=require('../model/createItems');

router.post('/postOrder',function(req,res){
 
   var {orderId,orderName,...newItems}=req.body;

   if( !orderId || !orderName  || !newItems){
     return  res.status(400).json({err:'Something went wrog'})
   }
   ItemsList.findById({_id:orderId},function(err,data){
     
     if(!err && data!=null ){
      var reqItem={};
      var saveOrder=new createOrder({
         orderName:orderName,
         orderId:orderId
      });
    

      for(let i=0;i<newItems["items"].length;i++){
         reqItem.itemName=newItems.items[i]["itemName"];
         reqItem.itemCost=newItems.items[i]["itemCost"];
         saveOrder.items.push(reqItem);
      }

     saveOrder.save();
       // send document previous data
     return res.status(200).json({saveOrder});
     }
    else{
       return res.status(400).json({info:'Cannot find Id'})
    }

   })

   
})

// if given id of particular id 
router.get('/myorder/:id',function(req,res){
     var id=req.params.id;
     createOrder.findById(id,function(err,data){
        if(!err && data!=null){
            res.send(data);
         }
        else{
            res.send("not found this user");
         }
     })
})

module.exports=router;