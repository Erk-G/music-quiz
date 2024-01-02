import './App.css';
import React, {useEffect,useState} from "react";
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
  const setPlayerAmount=(num)=>{
    let newPlayerList=[];
    for(let i=0;i<num;i++){
      newPlayerList.push(<Players number={i}/>)
    }
    setPlayerList(newPlayerList);
  }
  return (
    <questionContext.Provider value={questionDict}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome setQuestions={setQuestionDict} setPlayerAmount={setPlayerAmount}/>}/>
        <Route path="/board" element={<Board/>}/>
        <Route path="/question/easy/:id" element={<Question difficulty={questionDict.easy}/>}/>
        <Route path="/question/tough/:id" element={<Question difficulty={questionDict.tough}/>}/>
        <Route path="/question/impossible/:id" element={<Question difficulty={questionDict.impossible}/>}/>
        <Route path="/question/special/:id" element={<Question difficulty={questionDict.special}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      {playerList}
      </BrowserRouter>
    </div>
    </questionContext.Provider>
  );
}

export default App;
