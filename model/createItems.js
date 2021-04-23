var mongoose=require('mongoose');
var createItem=mongoose.Schema;
var _id=mongoose.Types.ObjectId;

var Items=new createItem({
     id:{
        type:_id      
    },
     ItemName:{
       type:String
     },
     ItemCost:{
        type:String
     }
})

module.exports=mongoose.model("createItems",Items);
