const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, getFileName(file.originalname) + '-' + Date.now())
    }
  });


  var upload = multer({ storage: storage ,fileFilter:(req,file,cb)=>{
    if(file.mimetype=='text/csv') cb(null,true)
    else {
      cb(null,false)
      return cb(new Error('Only csv files are allowed'));
    }
  }}).array('file',10);


  module.exports = (req, res, next) => {
    upload(req, res, function (err) {
        //console.log(req.body);
        //console.log(req.files);
        req.uploadError = false;
        if (err) {

           console.log(err.Error)
            req.uploadError = true;
            
            //console.log(req.body);
            //return res.end("Error uploading file.");
        }
        next();
        //res.end("File is uploaded " + req.body.name);
    });
}


//gets the filename 
function getFileName(fileName){

let name=fileName.split('.')
return name[0];

}
