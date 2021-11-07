const express = require('express');
const router = express.Router();
const user_controllers=require('../Controllers/user');
const  validator = require('../Validation/user');
const  file_uploader=require('../middleware/multer');

/* GET posts listing. */
router.post('/add',validator.user_validation,user_controllers.add_user);

//fetches users and its info with the id.
router.get('/:id',user_controllers.add_user)

//sends news letters.
router.post('/sendNewsLetters',file_uploader,user_controllers.add_newsletters)


module.exports = router;
