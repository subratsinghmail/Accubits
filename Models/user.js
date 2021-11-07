const mongoose=require('mongoose');
const schema = mongoose.Schema;

const user_schema = new schema({
    firstName:{
        type:String,
        unique:false,
        require:true
    },
    lastName:{
        type:String,
        unique:false,
        require:false
    },
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }


})


module.exports=mongoose.model('users',user_schema,'users');


