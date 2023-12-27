import React, {useEffect,useState} from "react";
import Board from "./Board";
//Preliminary logic will be here. Like type  of quiz and grabbing questions
//The button will eventually turn in form data
const Welcome=()=>{
    const tempQuestions={easy:["something"] ,tough:["Tsome"],impossible:["Isome"],special:["alot"]};
    const [questions, setQuestions]=useState(tempQuestions);
    const [hostReady,setHostReady]=useState(false);
    const handleSubmission=()=>{
        setHostReady(true);
    }
    if(hostReady){
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