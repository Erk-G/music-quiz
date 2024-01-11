//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
// This is closer to what the end result of Board will be. It will go through one more revision once a db is set up
import React, {useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import questionContext from "./helper/questionContext";
const Board =()=>{
    const {easy,tough,impossible,special}=useContext(questionContext);
    const navigate=useNavigate();
    const btnClass="bg-blue-700 hover:bg-blue-900 text-yellow-400 font-bold py-2 px-4 rounded";
    const clickedbtnClass="bg-red-700 hover:bg-red-900 text-yellow-400 font-bold py-2 px-4 rounded";
    const boardClass="grid grid-rows-"+easy.length.toString()+" grid-flow-col-dense gap-2 py-10";

    // const boardClass2="grid grid-rows-3 grid-flow-col-dense gap-2 py-10";
    // console.log(boardClass===boardClass2);
    // console.log(boardClass);

    const sendUser=(url,difficulty,id)=>{
        // console.log("hello ," , difficulty,id);
        if(!localStorage.getItem("clickedQuestions")){
            localStorage.setItem("clickedQuestions",JSON.stringify([url]));
        }
        else{
            let newChosenQuestions=JSON.parse(localStorage.getItem("clickedQuestions"));
            newChosenQuestions.push(url);
            // console.log(newChosenQuestions);
            localStorage.setItem("clickedQuestions",JSON.stringify(newChosenQuestions));
        }
        // console.log(id);
        // console.log(chosenQuestions);
        navigate(`/question/${difficulty}/${id}`)
    };

    const produceButton=(song,idx)=>{
        if(JSON.parse(localStorage.getItem("clickedQuestions")).includes(song.url)){
            return(
            <button id={song.url} onClick={()=>sendUser(song.url,song.difficulty,idx)} className={clickedbtnClass} disabled>{song.difficulty}</button>
            )
        }
        else{
            return(
                <button id={song.url} onClick={()=>sendUser(song.url,song.difficulty,idx)} className={btnClass} >{song.difficulty}</button>
            )
        }
    };
    if(special){
        return(
            <div className={boardClass}>
                {easy.map((song,idx)=>produceButton(song,idx))}
                {tough.map((song,idx)=>produceButton(song,idx))}
                {impossible.map((song,idx)=>produceButton(song,idx))}
                {special.map((song,idx)=>produceButton(song,idx))}
            </div>
        )
    }
    else{
        return(
            <div className={boardClass}>
                {easy.map((song,idx)=>produceButton(song,idx))}
                {tough.map((song,idx)=>produceButton(song,idx))}
                {impossible.map((song,idx)=>produceButton(song,idx))}
            </div>
        )
    }
}

export default Board;