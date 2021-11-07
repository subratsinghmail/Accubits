const queueController = require('../config');

//adds a new job in the queue.
const add_queue = async (req, res, next) => {
  //  console.log(req)
  try {
  
   let options=GetOptions(req.body.priority,req.body.jobId);
   //database create.//

    let a = await queueController.emailQueue.add({name:'Subrat'});
    //information sent will be given.
    if (a) return res.status(200).json({ status: 1, message: 'Your request has been aded to the queue',data:a });

  
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 1, message: 'Error in adding job queue to the Job' })
  }
}




// const pause_queue=async (req, res) => {

// try {
 

//   //pauses the job queuue.
//     let a= await job_queue.pause(false)     
//     if(a)return res.status(200).json({ status: 1, message:'Queue is paused',data:a})


// } catch (error) {
//   return res.status(500).json({ status: 1, message: 'Could not perform this action' })
  
// }
// }


// const resume_queue=async (req, res) => {

//   try {
   
  
//     //pauses the job queuue.
//       let a= await job_queue.pause(false)     
//       if(a)return res.status(200).json({ status: 1, message:'Queue is paused',data:a})
  
  
//   } catch (error) {
//     return res.status(500).json({ status: 1, message: 'Could not perform this action' })
    
//   }
//   }
  

// const  update_priority=async (req, res) => {
// try {
  





// } catch (error) {
  
//   return res.status(500).json({ status: 1, message: 'Error in updating the priority.' })
// }



// }

//gets the options that are needed for the job. 
function GetOptions(priority,jobId){
    return {
       priority: priority?priority:1,
       jobId: jobId,
       timeout:250000,
       attempts:2,
      removeOnComplete:true,
      removeOnFail:true
    }

}


module.exports = add_queue;