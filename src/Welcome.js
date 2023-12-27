import React, {useEffect,useState} from "react";
import Board from "./Board";
//Preliminary logic will be here. Like type  of quiz and grabbing questions
const Welcome=()=>{
    const tempQuestions={easy:["something"] ,tough:["Tsome"],impossible:["Isome"],special:["alot"]};
    const [questions, setQuestions]=useState(tempQuestions);
    return(
        <Board />
    )
}