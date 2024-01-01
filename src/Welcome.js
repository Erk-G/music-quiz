import React, {useEffect,useState} from "react";
import Board from "./Board";
//Preliminary logic will be here. Like type  of quiz and grabbing questions
//The button will eventually turn in form data
const Welcome=({setQuestions})=>{
    const tempQuestions={easy:["0","something"] ,tough:["0","Tsome"],impossible:["0","Isome"],special:["0","alot"]};
    const [hostReady,setHostReady]=useState(false);
    const handleSubmission=()=>{
        setQuestions(tempQuestions);
        setHostReady(true);
    }
    if(hostReady){
        return(
            <Board />
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