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
    const opts = {
        height: '50',
        width: '80',
      };

    return(
        <div>
            <div >
                Question #
            </div>
            <div>
                <h1>This is here to see if it is working</h1>
                <YouTube videoId={question.url} opts={opts}/>
                <button onClick={handleSubmit}>Back to Board</button>
            </div>
        </div>
    )
}

export default Question;