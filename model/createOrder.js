var mongoose=require('mongoose');
var {ObjectId}=mongoose.Schema.Types;
var ItemList=require('./createItems');

var createOrder=new mongoose.Schema({
    orderName:{
        type:String
     },
    orderId:{type:ObjectId},
    items:[{
        itemName:{type:String},
        itemCost:{type:String}
    }]
})

module.exports=mongoose.model('createOrder',createOrder);

