import './App.css';
import React, {useEffect,useState} from "react";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import questionContext from "./questionContext";
import Welcome from "./Welcome";
import Board from './Board';
import Question from './Question';

//tempQuestions is our temp database. I don't think any logic will be here in the end
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/question/:number" element={<Question/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
