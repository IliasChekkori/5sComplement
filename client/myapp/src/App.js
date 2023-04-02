import './App.css';
import {BrowserRouter , Route, Routes } from "react-router-dom" 
import Login from './Login';
import Home from "./Home";
import Profile from './Profile';
import Messages from './messages';
import SignUp from './signup';
import Add from './Add';

import { createContext, useState } from 'react';
export const GlobalContext = createContext();

function App() {

const [globalState, setGlobalState] = useState({loggedIn: false, user: {}})
  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
    <div className="App"> 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/> } /> 
            <Route path="/home" element={<Home/> } /> 
            <Route path="/profile" element={<Profile/> } /> 
            <Route path="/messages" element={<Messages/> } /> 
            <Route path="/signup" element={<SignUp/> } /> 
            <Route path="/add" element={<Add/> } /> 
          </Routes>
        </BrowserRouter>
    </div> 
    </GlobalContext.Provider>
  );
}

export default App;
