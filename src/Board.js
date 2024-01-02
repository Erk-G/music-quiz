//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
// This is closer to what the end result of Board will be. It will go through one more revision once a db is set up
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import questionContext from "./helper/questionContext";
const Board =()=>{
    const navigate=useNavigate();
    const {easy,tough,impossible,special}=useContext(questionContext);
    const sendUser=(difficulty,id)=>{
        console.log("hello ," , difficulty,id);
        navigate(`/question/${difficulty}/${id}`)
    }
    return(
        <div>
            {easy.map(song=><button onClick={()=>sendUser("easy",song[0])}>Easy</button>)}
            {tough.map(song=><button onClick={()=>sendUser("tough",song[0])}>Tough</button>)}
            {impossible.map(song=><button onClick={()=>sendUser("impossible",song[0])}>Impossible</button>)}
            {special.map(song=><button onClick={()=>sendUser("special",song[0])}>Special</button>)}
        </div>
    )
}

export default Board;