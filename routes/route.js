var express = require('express');
var router = express.Router();


router.post('/test', (req, res) =>{

    var str = req.body.string_to_cut;  
    var return_string ="";

    for(var i=2;i<str.length;i=i+3)
    {
       return_string += str.charAt(i);       
    }
    res.json({return_string: return_string});
});

module.exports = router;