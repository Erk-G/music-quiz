//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
// Now that I am addding context logic, all of these questions will need to be buttons that onClick will link to that question and in questions it will take params and load the question
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Question from "./Question";
import questionContext from "./questionContext";
const Board =()=>{
    const {easy,tough,impossible,special}=useContext(questionContext);
    return(
        <div>
            {easy.map(song=><Question song={song} />)}
            {tough.map(song=><Question song={song} />)}
            {impossible.map(song=><Question song={song} />)}
            {special.map(song=><Question song={song} />)}
        </div>
    )
}

export default Board;