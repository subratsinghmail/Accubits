const user_model=require('../Models/user');
const queue_controller=require('../config');

// console.log(queue_controller,'=============')

const add_user= async(req,res,next) => {
 
     let body=req.body;
  
    let user=await user_model.findOne({email:req.body.email})
    if(user) return res.status(400).json({status:1,message:'user with this email already exists,'})
    else{
       user= await user_model.create(body)
        return  res.status(200).json({status:1,message:'user Created Successfully',data:user})
    }
}




//gets the CSV files through the multer and adds it in the queue.
const add_newsletters=async(req,res,next) => { 


    if(!req.uploadError){
        let add=req.files.map(file =>{
            return queue_controller.file_queue.add(file)
        })
    
        Promise.all(add).then(result=>{
            return res.status(200).json({status:1,message:'Files have been added to the queeue. Sit back and enjoy.',data:result})
        }).catch(err=>{
            return res.status(500).json({status:1,message:'could not add file to the queue'})
        })

    }else return res.status(400).json({status:0,message:'files could not be uploaded due to extension errors'})
 
    
}



module.exports={
    add_user,
    add_newsletters
}

