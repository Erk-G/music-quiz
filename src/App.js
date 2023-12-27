import './App.css';
import React, {useEffect,useState} from "react";
import Board from "./Board";

//tempQuestions is our temp database. I don't think any logic will be here in the end
function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
