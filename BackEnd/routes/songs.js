const express=require("express");
const Song=require("../models/song");
const songSchema=require("../songSchema.json");
const jsonschema=require("jsonschema");

const router=new express.Router();

/** GET /[genre]/[difficulty] =>*/

router.get("/:genre/:difficulty",async function(req,res,next){
    try{
        const songs=await Song.getSongs(req.params.genre,req.params.difficulty);
        return res.json({songs});
    }
    catch(error){
        return next(error);
    }
});

/**POST / songData => {song: newSong} */
router.post("/",async function(req,res,next){
    try{
        const test=jsonschema.validate(req.body,songSchema);
        if(!test.valid){
            let listOfErrors = result.errors.map(error => error.stack);
            return next(listOfErrors);
        }
        const song=await Song.newSong(req.body);
        return res.status(201).json({song});
    }
    catch(error){
        return next(error);
    }
})

module.exports=router;