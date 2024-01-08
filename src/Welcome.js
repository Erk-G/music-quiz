import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
//Preliminary logic will be here. Like type  of quiz and grabbing questions
//The button will eventually turn in form data
const Welcome=({getQuestions,setPlayerAmount})=>{
    // const tempQuestions={easy:[{id:"0",url:"M7lc1UVf-VE",SongName:"Snactuary"}] ,
    // tough:[{id:"0",url:"HTUq3Ik1GHM",SongName:"Snactuary"}] ,
    // impossible:[{id:"0",url:"2g811Eo7K8U",SongName:"Snactuary"}] ,
    // special:[{id:"0",url:"HTUq3Ik1GHM",SongName:"Snactuary",target:"Player 1"}] };
    const [hostReady,setHostReady]=useState(false);
    const navigate=useNavigate()
    const handleSubmission=async (e)=>{
        e.preventDefault();
        const data=e.target
        let result= await getQuestions(data.genre.value,data.question_amount.value,data.special.value);
        setPlayerAmount(data.player_amount.value);
        setHostReady(true);
    }
    if(hostReady){
        return(
            navigate("/board")
        )
    }
    // Radio Button Format
    // <input type="radio" id="" name="" value=""/>
    // <label for=""> </label> <br/>
    else{
        return(
            <div>
            <h1>Music Quiz!</h1>
            <form onSubmit={handleSubmission}>
                <p>Song Genre</p>
                    <input type="radio" id="videogame" name="genre" value="videogame" checked="checked"/>
                    <label for="videogame"> Videogame Music </label> <br/>
                    <input type="radio" id="anime" name="genre" value="anime"/>
                    <label for="anime"> Anime Music </label> <br/>
                <p>Questions per difficulty</p>
                    <input type="radio" id="three" name="question_amount" value={3} checked="checked"/>
                    <label for="three"> 3 </label> <br/>
                    <input type="radio" id="four" name="question_amount" value={4}/>
                    <label for="four"> 4 </label> <br/>
                    <input type="radio" id="five" name="question_amount" value={5}/>
                    <label for="five"> 5 </label> <br/>
                <p>Number of players</p>
                    <input type="radio" id="oneP" name="player_amount" value={1} checked="checked"/>
                    <label for="oneP"> 1 </label> <br/>
                    <input type="radio" id="twoP" name="player_amount" value={2}/>
                    <label for="twoP"> 2 </label> <br/>
                    <input type="radio" id="threeP" name="player_amount" value={3}/>
                    <label for="threeP"> </label> <br/>
                <p>Player targeted questions?</p>
                    <input type="radio" id="yes" name="special" value={true}/>
                    <label for="yes"> Yes </label> <br/>
                    <input type="radio" id="no" name="special" value={false} checked="checked"/>
                    <label for="no"> No </label> <br/>
                <button>Start</button>
            </form>
            </div>
        )
    }
}

export default Welcome;