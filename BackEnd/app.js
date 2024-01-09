const express= require("express");
const cors = require("cors");
const morgan = require("morgan");
const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


const songRoute=require("./routes/songs");

app.use("/songs",songRoute);

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    return res.json({
        error:err,
        message: err.message
    });
});

module.exports=app;