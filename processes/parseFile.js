//this function gets the file name and its records and pushes into the email queue.

const queue_Controller=require('../config');
const parse=require('../Utils/csvParser');

//this is where we are going to parse the files.
module.exports = async function(job,done){

    try {
        
        // console.log(job.data)

        let clients=await parse(job.data.filename)
         if(clients){
            
           let a=clients.map(function(jobs){
               return  queue_Controller.emailQueue.add(jobs,{removeOnFail:true})
           })

           Promise.all(a).then(function(result){
               done()
           })
            
         }
     
       
    } catch (error) {
           console.log(error.message)
           //we could send an email alerting the concerned authorities for the fileName and the error type generated.
       done(new Error('error in scheduling job. Discarding this file'));
    }
   
   }
   
   
   
   //this function acts as an API which does some job and resolves after some time