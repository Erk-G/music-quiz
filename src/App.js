import './App.css';
import React, {useEffect,useState} from "react";
import Welcome from "./Welcome";

//tempQuestions is our temp database. I don't think any logic will be here in the end
function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
