import React, {useContext,useState} from "react";
import {Navigate,Outlet} from "react-router-dom";
import questionContext from "./helper/questionContext";

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