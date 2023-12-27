import React, {useState} from "react";
import "./Question.css";
//The will load the question in. An embedded youtube video where you cannot see anything visual, the category on top and buttons on the bottom to add or subtract points.
//I will need these to be a click to reveal. And then when finished it will turn the question grey and unlclickable
//current solution is a bit jank
const Question=({song})=>{
    const [isCompleted,setIsCompleted]=useState(false);
    const [style,setStyle]=useState(["show","hide"]);
    const changeStyle=()=>{
        if(style[1]=="show"){
            console.log("here");
            setIsCompleted(true);
        }
        else{
            console.log("first");
            setStyle(["hide","show"]);
        }
    }
    if(isCompleted){
        return(
            <div className="completed">
                <p>Question #</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className={style[0]} onClick={changeStyle}>
                    Question #
                </div>
                <div className={style[1]}>
                    <h1>This is here to see if it is working</h1>
                    <p>{song}</p>
                    <button onClick={changeStyle}>Back to Board</button>
                </div>
            </div>
        )
    }
}

export default Question;