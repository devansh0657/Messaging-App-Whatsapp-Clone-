import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // BEM naming conventionz
    <div className="app">

      <div className="app_body d-flex">
       
            <Sidebar />
            <Chat /> 
       </div>
    </div>
  );
}

export default App;