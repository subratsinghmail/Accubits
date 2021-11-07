
const sendMail=require('../middleware/amazonSes').sendEmail;
const queueController=require('../config').file_queue;
const logs=require('../Models/logs');
//this function over here perfroms all the tasks that are being added.

module.exports = async function(job,done){
 try {

    // console.log(job.data,'in the email queue')
      await sendMail(job.data)
      await logs.create(getLogsData())
       done()
    
 } catch (error) {
     console.log(error.message?error.message:'Unknown Error')
     //adds to the parking lot queue.
      await queueController.add(job.data)
    done(new Error(error.message?error.message:'Unknown Error. Ticket was given to the parking lot'));
 }

}

//this function acts as an API which does some job and resolves after some time.
function doJob(settings){
    return new Promise(function(resolve, reject){

        if(!settings.isGoingToFail){
            setTimeout(function(){
                resolve('The  job is perfectly done')
            },settings.responseSetting)
        }else{
            setTimeout(function(){
                reject('The  job is perfectly done')
            },settings.responseSetting)
        }
      
    })

}



function getLogsData(){

 return{
     name:'subrat',
     email:'subratsinghmail@gmail.com',
     status:1,
     newsLetterName:'wow',
     reason:null,


 }




}
