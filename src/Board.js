//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
// This is closer to what the end result of Board will be. It will go through one more revision once a db is set up
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import questionContext from "./helper/questionContext";
const Board =()=>{
    const navigate=useNavigate();
    const {easy,tough,impossible,special}=useContext(questionContext);
    const sendUser=(difficulty,id)=>{
        // console.log("hello ," , difficulty,id);
        navigate(`/question/${difficulty}/${id}`)
    }
    if(special.keys().length){
        return(
            <div>
                {easy.map((song,idx)=><button onClick={()=>sendUser("easy",idx)}>Easy</button>)}
                {tough.map((song,idx)=><button onClick={()=>sendUser("tough",idx)}>Tough</button>)}
                {impossible.map((song,idx)=><button onClick={()=>sendUser("impossible",idx)}>Impossible</button>)}
                {special.map((song,idx)=><button onClick={()=>sendUser("special",idx)}>Special</button>)}
            </div>
        )
    }
    else{
        return(
            <div>
                {easy.map((song,idx)=><button onClick={()=>sendUser("easy",idx)}>Easy</button>)}
                {tough.map((song,idx)=><button onClick={()=>sendUser("tough",idx)}>Tough</button>)}
                {impossible.map((song,idx)=><button onClick={()=>sendUser("impossible",idx)}>Impossible</button>)}
            </div>
        )
    }
}

export default Board;