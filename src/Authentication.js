import React, {useContext,useState} from "react";
import {Navigate,Outlet} from "react-router-dom";
import questionContext from "./helper/questionContext";

//Here to make sure users cannot go to any routes that require questions if they do not have questions.
//To see if they have any questions, easy should be an object that exists in context
const Authentication=()=>{
    const {easy}=useContext(questionContext);
    if(easy){
       return <Outlet/>
    }
    else{
        return <Navigate to="/" replace/>
    }
}

export default Authentication;