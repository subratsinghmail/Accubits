
const mongoose = require('mongoose');


 const connectDb =() => {
       return new Promise((resolve, reject) => {
        mongoose.connect(`${process.env.Database}`, {
          useNewUrlParser: true
        },function(error){
            if(error) reject('Could not connect')
            else {
              console.log('Connection Successfull to mongo client the',`${process.env.Database}`);
              resolve('Connection working')
            } 
        })

       })
    
  }


 module.exports=connectDb;