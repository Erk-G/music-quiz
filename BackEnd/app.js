const express= require("express");
const app=express();

app.use(express.json());

const songRoute=require("./routes/songs");

app.use("songs",songRoute);

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    return res.json({
        error:err,
        message: err.message
    });
});

module.exports=app;