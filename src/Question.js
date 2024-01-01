import React, {useState} from "react";
import "./Question.css";
import { useParams } from "react-router-dom";
//The will load the question in. An embedded youtube video where you cannot see anything visual, the category on top and buttons on the bottom to add or subtract points.
//I will need these to be a click to reveal. And then when finished it will turn the question grey and unlclickable
//current solution is a bit jank
const Question=()=>{
    const {id}=useParams();
}

export default Question;