const AWS=require('aws-sdk')

const SESConfig=getParams();


function getParams(){
    return{
        apiVersion:process.env.apiVersion,
        accessKeyId:process.env.accessKeyId,
        secretAccessKey:process.env.secretAccessKey,
        region:process.env.region


    }
}



//reads a file and returns a promsie  with the html structure.
function getEmailStructure(){
    return new Promise((resolve, reject) =>{

    })
}





exports.sendEmail=(source)=>{



return new Promise(function(resolve, reject){
    

    setTimeout(function(){
        resolve(source)
    },2000)
  
})


}





const payload = {
    Destination: { /* required */
        CcAddresses:
         [
           
             /* more items */
         ],
        ToAddresses: ['subrat.singh@team.cliffex.com']
    },
    Message: { /* required */
        Body: { /* required */
            Html: {
                Charset: "UTF-8",
                Data:``
            },
            
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Your email works fine'
        }
    },
    Source: 'no-reply@okurr.app' , /* required */
    ReplyToAddresses: [
       
        /* more items */
    ],
};
