import axios from "axios";
import React, {useState} from "react";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import questionContext from "./helper/questionContext";
import Welcome from "./Welcome";
import Question from './Question';
import Board from './Board';
import Players from "./Players";

//tempQuestions is our temp database. I don't think any logic will be here in the end
//Keeping context an object incase I need context for other uses
function App() {
  const [questionDict,setQuestionDict]=useState({});
  const [playerList,setPlayerList]=useState([]);
  //num is always 3,4,or 5. maxVal is length of shortest array
  const uniqueQuestions=(num,arr)=>{
    let numbers=[];
    let newQuestions=[];
    let number;
    while(numbers.length<num){
      number=Math.floor(Math.random()*arr.length);
      //console.log("numbers is:",numbers," number is:",number);
      if(!numbers.includes(number)){
        numbers.push(number);
        newQuestions.push(arr[number]);
      }
    }
    return newQuestions;
  }
  const getQuestions=async (genre,num_questions,special)=>{
    const base_url=`http://localhost:3001/songs/${genre}`;
    let easy= await axios.get(base_url+"/easy");
    let tough= await axios.get(base_url+"/tough");
    let impossible= await axios.get(base_url+"/impossible");
    easy=uniqueQuestions(num_questions,easy.data.songs);
    tough=uniqueQuestions(num_questions,tough.data.songs);
    impossible=uniqueQuestions(num_questions,impossible.data.songs);
    let newQuestions;
    if(special!="false"){
      let special= await axios.get(base_url+"/special");
      special=uniqueQuestions(num_questions,special.data.songs);
      newQuestions={easy:easy,tough:tough,impossible:impossible,special:special};
    }
    else{
      newQuestions={easy:easy,tough:tough,impossible:impossible};
    }
    setQuestionDict(newQuestions);

  }
  const setPlayerAmount=(num)=>{
    let newPlayerList=[];
    for(let i=0;i<num;i++){
      newPlayerList.push(<Players number={i+1}/>)
    }
    setPlayerList(newPlayerList);
  }
  return (
    <questionContext.Provider value={questionDict}>
    <div className="min-h-screen bg-blue-800 text-center">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome getQuestions={getQuestions} setPlayerAmount={setPlayerAmount}/>}/>
        <Route path="/board" element={<Board/>}/>
        <Route path="/question/easy/:id" element={<Question difficulty={questionDict.easy}/>}/>
        <Route path="/question/tough/:id" element={<Question difficulty={questionDict.tough}/>}/>
        <Route path="/question/impossible/:id" element={<Question difficulty={questionDict.impossible}/>}/>
        <Route path="/question/special/:id" element={<Question difficulty={questionDict.special}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      <div className="grid grid-cols-3 grid-flow-col gap-2 py-10">
      {playerList}
      </div>
      </BrowserRouter>
    </div>
    </questionContext.Provider>
  );
}

export default App;
