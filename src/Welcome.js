import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
//Preliminary logic will be here. Setting questions and players based on input.
//Form is made up of radio buttons. Just easier to prevent errors with set answers.
//Will need to change genre input with more genres. Maybe make it a drop down boxs
const Welcome=({getQuestions,setPlayerAmount})=>{
    // const tempQuestions={easy:[{id:"0",url:"M7lc1UVf-VE",SongName:"Snactuary"}] ,
    // tough:[{id:"0",url:"HTUq3Ik1GHM",SongName:"Snactuary"}] ,
    // impossible:[{id:"0",url:"2g811Eo7K8U",SongName:"Snactuary"}] ,
    // special:[{id:"0",url:"HTUq3Ik1GHM",SongName:"Snactuary",target:"Player 1"}] };

    //When form is submitted host is ready and redirects to board.
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
            <div className="text-center min-h-screen bg-blue-800 text-white">
            <h1 className="text-3xl font-bold underline">Music Quiz!</h1>
            <form onSubmit={handleSubmission} className="container mx-auto py-10">
                <div className="columns-4 gap-2 py-10">
                <p className="text-2xl underline">Song Genre</p>
                    <input type="radio" id="videogame" name="genre" value="videogame" defaultChecked="checked"/>
                    <label htmlFor="videogame"> Videogame Music </label> <br/>
                    <input type="radio" id="anime" name="genre" value="anime"/>
                    <label htmlFor="anime" > Anime Music </label> <br/>
                <p className="text-2xl underline"> Questions per difficulty</p>
                    <input type="radio" id="three" name="question_amount" value={3} defaultChecked="checked"/>
                    <label htmlFor="three"> 3 </label> <br/>
                    <input type="radio" id="four" name="question_amount" value={4}/>
                    <label htmlFor="four"> 4 </label> <br/>
                    <input type="radio" id="five" name="question_amount" value={5}/>
                    <label htmlFor="five"> 5 </label> <br/>
                <p className="text-2xl underline">Number of players</p>
                    <input type="radio" id="oneP" name="player_amount" value={1} defaultChecked="checked"/>
                    <label htmlFor="oneP"> 1 </label> <br/>
                    <input type="radio" id="twoP" name="player_amount" value={2}/>
                    <label htmlFor="twoP"> 2 </label> <br/>
                    <input type="radio" id="threeP" name="player_amount" value={3}/>
                    <label htmlFor="threeP"> 3 </label> <br/>
                <p className="text-2xl underline">Player targeted questions?</p>
                    <input type="radio" id="yes" name="special" value={true}/>
                    <label htmlFor="yes"> Yes </label> <br/>
                    <input type="radio" id="no" name="special" value={false} defaultChecked="checked"/>
                    <label htmlFor="no"> No </label> <br/>
                    </div>
                <button className="bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded object-bottom">Start</button>
            </form>
            </div>
        )
    }
}

export default Welcome;