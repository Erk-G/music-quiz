import {useState} from "react";
const Players=({number})=>{
    const [score,setScore]=useState(0);
    const addScore=()=>{
        setScore(1+score)
    }
    const subtractScore=()=>{
        setScore(-1+score);
    }
    return(
        <div>
            <h4>Player: {number}</h4>
            <h5>Score: {score}</h5>
            <button onClick={addScore}>+1</button>
            <button onClick={subtractScore}>-1</button>
        </div>
    )
}

export default Players;