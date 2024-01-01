import './App.css';
import React, {useEffect,useState} from "react";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import questionContext from "./questionContext";
import Welcome from "./Welcome";
import Question from './Question';

//tempQuestions is our temp database. I don't think any logic will be here in the end
function App() {
  const [questionDict,setQuestionDict]=useState();
  return (
    <questionContext.Provider value={questionDict}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome setQuestions={setQuestionDict}/>}/>
        <Route path="/question/:difficulty/:id" element={<Question/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </questionContext.Provider>
  );
}

export default App;
