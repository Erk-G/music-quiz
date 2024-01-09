import React, {useState} from "react";
import "./Question.css";
import { useParams, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
//The will load the question in. An embedded youtube video where you cannot see anything visual, the category on top and buttons on the bottom to add or subtract points.
//I will need these to be a click to reveal. And then when finished it will turn the question grey and unlclickable
//current solution is a bit jank
const Question=({difficulty})=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const newId=parseInt(id);
    const question=difficulty[newId];
    const handleSubmit=()=>{
        navigate("/board");
    }
    let target;
    // if(difficulty=="special"){
    //     target=""
    // }
    let opts;
    if(question.difficulty=="easy"){
        opts = {
            height: '30',
            width: '30',
            playerVars:{
                autoplay:1,
                end:6,
            },
          };
    }
    else{
        opts = {
            height: '30',
            width: '30',
            playerVars:{
                autoplay:1,
            },
          };
    }

    return(
        <div>
            <div>
                <h1>{target}</h1>
            </div>
            <div>
                <h1>{question.difficulty} Question # {id+1}</h1>
                <YouTube videoId={question.url} opts={opts}/>
                <h2>Song Name: </h2>
                <p>{question.song_title}</p>
                <h2>Song is from: </h2>
                <p>{question.song_origin}</p>
                <button onClick={handleSubmit}>Back to Board</button>
            </div>
        </div>
    )
}

export default Question;