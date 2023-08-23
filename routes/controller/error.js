const path =require('path')

exports.getError = (req , res , next)=>{                           // for not exist url or page
    res.status(404).sendFile(path.join(__dirname,'../','views','pgnf.html'));
}