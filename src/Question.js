import React, {useState} from "react";
import "./Question.css";
import { useParams, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
//The will load the question in. An embedded youtube video where you cannot see anything visual, the category on top and buttons on the bottom to add or subtract points.
//I will need these to be a click to reveal. And then when finished it will turn the question grey and unlclickable
//current solution is a bit jank
const Question=({difficulty})=>{
    const [nameVisibility,setNameVisibility]= useState("invisible");
    const [originVisibility,setOriginVisibility]= useState("invisible");
    const navigate=useNavigate();
    const {id}=useParams();
    const newId=parseInt(id);
    const question=difficulty[newId];
    const handleSubmit=()=>{
        navigate("/board");
    }
    const changeVisibility=()=>{
        setOriginVisibility("visible");
        if(originVisibility==="visible"){
            setNameVisibility("visible");
        }
    }
    // if(difficulty=="special"){
    //     target=""
    // }
    let opts;
    if(question.difficulty==="easy"){
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
            height: '400',
            width: '400',
            playerVars:{
                autoplay:1,
            },
          };
    }

    return(
        <div className="text-white">
            <div>
                <h1 className="text-3xl font-bold underline">{question.player_targets}</h1>
            </div>
            <div>
                <h1 className="text-3xl font-bold underline">{question.difficulty} Question # {id+1}</h1>
                <div className="hidden">
                    <YouTube videoId={question.url} opts={opts}/>
                </div>
            <div className="grid grid-cols-2 gap-2">
                <h2>Song Name: </h2>
                <p className={nameVisibility}>{question.song_title}</p>
                <h2>Song is from: </h2>
                <p className={originVisibility}>{question.song_origin}</p>
                <button onClick={changeVisibility} className="bg-indigo-700 hover:bg-indigo-900 font-bold py-2 px-2 rounded">Show Answer</button>
            </div>
                <button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded">Back to Board</button>
            </div>
        </div>
    )
}

export default Question;