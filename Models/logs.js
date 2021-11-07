const mongoose=require('mongoose');
const schema = mongoose.Schema;


const logs_schema = new schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    },
    newsLetterName:{
        type:String
    },
    reason:{
        type:String,
         default:null
    }

})


module.exports=mongoose.model('logs',logs_schema,'logs');


