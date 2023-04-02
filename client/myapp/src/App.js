import './App.css';
import {BrowserRouter , Route, Routes } from "react-router-dom" 
import Login from './Login';
import Home from "./Home";
import Profile from './Profile';
import Messages from './messages';
import SignUp from './signup';
function App() {
  return (
    <div className="App"> 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/> } /> 
            <Route path="/home" element={<Home/> } /> 
            <Route path="/profile" element={<Profile/> } /> 
            <Route path="/messages" element={<Messages/> } /> 
            <Route path="/signup" element={<SignUp/> } /> 
          </Routes>
        </BrowserRouter>
    </div> 
  );
}

export default App;
