import React, {useState} from "react";
import "./Question.css";
//The will load the question in. An embedded youtube video where you cannot see anything visual, the category on top and buttons on the bottom to add or subtract points.
//I will need these to be a click to reveal. And then when finished it will turn the question grey and unlclickable
//current solution is a bit jank
const Question=({song})=>{
    const [isCompleted,setIsCompleted]=useState(false);
    let questionInfo="hide";
    let questionPreview="show";
    const changeStyle=()=>{
        if(questionInfo=="show"){
            setIsCompleted(true);
        }
        else{
            questionPreview="hide";
            questionInfo="show";
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
                <div className={questionPreview} onClick={changeStyle}>
                    Question #
                </div>
                <div className={questionInfo}>
                    <p>{song}</p>
                    <button onClick={changeStyle}>Back to Board</button>
                </div>
            </div>
        )
    }
}

export default Question;