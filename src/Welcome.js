import React, {useEffect,useState} from "react";
import Board from "./Board";
//Preliminary logic will be here. Like type  of quiz and grabbing questions
//The button will eventually turn in form data
const Welcome=()=>{
    const tempQuestions={easy:["something"] ,tough:["Tsome"],impossible:["Isome"],special:["alot"]};
    const [questions, setQuestions]=useState(tempQuestions);
    let test=false;
    const handleSubmission=()=>{
        test=!test;
    }
    if(test){
        return(
            <Board questions={questions}/>
        )
    }
    else{
        return(
            <div>
            <h1>Music Quiz!</h1>
            <button onClick={handleSubmission}>Start</button>
            </div>
        )
    }
}

export default Welcome;