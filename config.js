const Bull= require('bull');
// const process=require('./processes/tasks');
// const fileProcess=require('./processes/parseFile');


const emailQueue = new Bull('email', {
    redis:`127.0.0.1:6379`
});

const parkingLotQueue=new Bull('parking lot queue',{
    redis:`127.0.0.1:6379`
})


const file_queue = new Bull('file queue',{
    redis:`127.0.0.1:6379'`
})




emailQueue.on('completed',(job,result)=>{
    console.log('email queue Completes a job')
})


file_queue.on('completed',(job,result)=>{
   
  console.log('file queue complets a job')
})


parkingLotQueue.on('completed',(job,result)=>{
    console.log('parking lot completes a job');
})




module.exports = {
    emailQueue,
    parkingLotQueue,
    file_queue
}
