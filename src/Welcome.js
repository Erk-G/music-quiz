import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
//Preliminary logic will be here. Like type  of quiz and grabbing questions
//The button will eventually turn in form data
const Welcome=({setQuestions,setPlayerAmount})=>{
    const tempQuestions={easy:[{id:"0",url:"M7lc1UVf-VE",SongName:"Snactuary"}] ,
    tough:[{id:"0",url:"HTUq3Ik1GHM",SongName:"Snactuary"}] ,
    impossible:[{id:"0",url:"2g811Eo7K8U",SongName:"Snactuary"}] ,
    special:[{id:"0",url:"HTUq3Ik1GHM",SongName:"Snactuary",target:"Player 1"}] };
    const [hostReady,setHostReady]=useState(false);
    const navigate=useNavigate()
    const handleSubmission=()=>{
        setQuestions(tempQuestions);
        setPlayerAmount(3);
        setHostReady(true);
    }
    if(hostReady){
        return(
            navigate("/board")
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