//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
// Now that I am addding context logic, all of these questions will need to be buttons that onClick will link to that question and in questions it will take params and load the question
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import questionContext from "./questionContext";
const Board =()=>{
    const {easy,tough,impossible,special}=useContext(questionContext);
    const sendUser=(difficulty,id)=>{
        const newId=parseInt(id);
        <Link to={`/question/${newId}`}/>
    }
    return(
        <div>
            {easy.map(song=><button onClick={()=>sendUser("easy",song[0])}/>)}
            {tough.map(song=><button onClick={()=>sendUser("tough",song[0])}/>)}
            {impossible.map(song=><button onClick={()=>sendUser("impossible",song[0])}/>)}
            {special.map(song=><button onClick={()=>sendUser("special",song[0])}/>)}
        </div>
    )
}

export default Board;