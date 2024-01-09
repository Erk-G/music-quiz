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
    console.log(easy);
    
    // {tough.map(song=><button onClick={()=>sendUser("tough",song.id)}>Tough</button>)}
    // {impossible.map(song=><button onClick={()=>sendUser("impossible",song.id)}>Impossible</button>)}
    // {special.map(song=><button onClick={()=>sendUser("special",song.id)}>Special</button>)}
    return(
        <div>
            {easy.map(song=><button onClick={()=>sendUser("easy",song.id)}>Easy</button>)}
        </div>
    )
}

export default Board;