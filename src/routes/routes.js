const express = require('express');
const router = express.Router();

router.get('/',(req,resp)=>{
  resp.render('index',{
    //enptic object
    author: 'Jhovany Morales Bruno'
  });
});

module.exports = router;
