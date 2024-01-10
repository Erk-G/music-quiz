//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
// This is closer to what the end result of Board will be. It will go through one more revision once a db is set up
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import questionContext from "./helper/questionContext";
const Board =()=>{
    const btnClass="bg-blue-700 hover:bg-blue-900 text-yellow-400 font-bold py-2 px-4 rounded";
    const navigate=useNavigate();
    const {easy,tough,impossible,special}=useContext(questionContext);
    const sendUser=(difficulty,id)=>{
        // console.log("hello ," , difficulty,id);
        navigate(`/question/${difficulty}/${id}`)
    }
    if(special[0]){
        return(
            <div className="grid grid-rows-3 grid-flow-col gap-2 py-10">
                {easy.map((song,idx)=><button id={idx} onClick={()=>sendUser("easy",idx)} className={btnClass} >Easy</button>)}
                {tough.map((song,idx)=><button id={idx} onClick={()=>sendUser("tough",idx)} className={btnClass} >Tough</button>)}
                {impossible.map((song,idx)=><button id={idx} onClick={()=>sendUser("impossible",idx)}className={btnClass} >Impossible</button>)}
                {special.map((song,idx)=><button id={idx} onClick={()=>sendUser("special",idx)}className={btnClass} >Special</button>)}
            </div>
        )
    }
    else{
        return(
            <div className="grid grid-cols-3 gap-2 py-10">
                {easy.map((song,idx)=><button id={idx} onClick={()=>sendUser("easy",idx)}className={btnClass} >Easy</button>)}
                {tough.map((song,idx)=><button id={idx} onClick={()=>sendUser("tough",idx)}className={btnClass} >Tough</button>)}
                {impossible.map((song,idx)=><button id={idx} onClick={()=>sendUser("impossible",idx)}className={btnClass} >Impossible</button>)}
            </div>
        )
    }
}

export default Board;