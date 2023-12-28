//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
import {Link} from "react-router-dom";
import Question from "./Question";
const Board =({questions})=>{
    const {easy,tough,impossible,special}=questions;
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