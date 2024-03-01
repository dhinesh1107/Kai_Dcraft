import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RootRouter from "./Routers/RootRouter";


function App() {
  return (
    <div className="App">
    {console.log("into app.js")}
      <RootRouter/>
    </div>
  );
}

export default App;
