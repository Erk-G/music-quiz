//A page with an amount of buttons on them pairing with the categories. Clicking on one will bring up a question of that category.
import React, {useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import questionContext from "./helper/questionContext";
const Board =()=>{
    //grabbing all question arrays from context
    const {easy,tough,impossible,special}=useContext(questionContext);
    const navigate=useNavigate();
    //tailwind CSSs that will be used more than once are set up here to make things look neater
    const btnClass="bg-blue-700 hover:bg-blue-900 text-yellow-400 font-bold py-2 px-4 rounded";
    const clickedbtnClass="bg-red-700 hover:bg-red-900 text-yellow-400 font-bold py-2 px-4 rounded";
    const boardClass="grid grid-rows-"+easy.length.toString()+" grid-flow-col-dense gap-2 py-10";

    //When a question is clicked, keep track of it in local storage and redirect user to the questions page
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

    //checks localstorage for the url. If in localStorage then the button is unlickable and red
    const produceButton=(song,idx)=>{
        if(localStorage.getItem("clickedQuestions") && JSON.parse(localStorage.getItem("clickedQuestions")).includes(song.url)){
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