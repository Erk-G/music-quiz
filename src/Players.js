import {useState} from "react";
const Players=({number})=>{
    const [score,setScore]=useState(0);
    const addScore=()=>{
        setScore(1+score)
    }
    const subtractScore=()=>{
        setScore(-1+score);
    }
    const btnClass="bg-sky-300 hover:bg-sky-500 font-bold py-3 px-3 rounded";
    return(
        <div className="container max-w-40 mx-auto text-white bg-sky-400 rounded">
            <h4>Player: {number}</h4>
            <h5>Score: {score}</h5>
            <div className="inline-flex">
            <button onClick={addScore} className={btnClass}>+1</button>
            <button onClick={subtractScore} className={btnClass}>-1</button>
            </div>
        </div>
    )
}

export default Players;