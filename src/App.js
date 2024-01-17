import axios from "axios";
import React, {useState} from "react";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import questionContext from "./helper/questionContext";
import Welcome from "./Welcome";
import Question from './Question';
import Board from './Board';
import Players from "./Players";
import Authentication from "./Authentication";

function App() {
  //questionDict holds all quiz questions, format {easy:[QuestionObject1...],tough:...}
  const [questionDict,setQuestionDict]=useState({});
  //Holds player components
  const [playerList,setPlayerList]=useState([]);
  //localStorage is used to keep track of questions clicked on, so clearing it on website reload
  localStorage.clear();
  //uniqueQuestions takes a num: number of questions needed and arr: array of song questions
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
  //getQuestions calls the backend to get number of questions from a specific genre with special difficulty being optional. Puts it into QuestionDict
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
  //Puts num players into PlayerList
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

        <Route path="/board" element={<Authentication/>}>
          <Route path="/board" element={<Board/>}/>
        </Route>

        <Route path="/question/easy/:id" element={<Authentication/>}>
          <Route path="/question/easy/:id" element={<Question difficulty={questionDict.easy}/>}/>
        </Route>

        <Route path="/question/tough/:id" element={<Authentication/>}>
          <Route path="/question/tough/:id" element={<Question difficulty={questionDict.tough}/>}/>
        </Route>

        <Route path="/question/impossible/:id" element={<Authentication/>}>
          <Route path="/question/impossible/:id" element={<Question difficulty={questionDict.impossible}/>}/>
        </Route>

        <Route path="/question/special/:id" element={<Authentication/>}>
          <Route path="/question/special/:id" element={<Question difficulty={questionDict.special}/>}/>
        </Route>
        
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
