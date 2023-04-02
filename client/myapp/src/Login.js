import React, { useState, useEffect, useContext } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GlobalContext } from './App';
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
    const [globalState, setGlobalState] = useContext(GlobalContext);
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();  


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse); console.log("the code res, ",codeResponse)},
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
             
                axios.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + user.access_token, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        setProfile(res.data);
                    

                    }).then(() => fetch("http://localhost:5020/user").then((res) =>  {
                        return res.json(); 
                    }).then((data) => {
                       
                        let exists = false; 
                        data.forEach(element => {
                            if (element.googleID === profile.id){
                                exists = true; 
                            }
                        })
                        
                        if (!exists) { 
                                const newUser = {name: profile.name, address: "test", email: profile.email, googleID: profile.id}
                                fetch('http://localhost:5020/user', {
                                method: 'POST',
                                headers: {
                                'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(newUser)}
                                ).then((res) => console.log('sucesfully added', res))
                                .catch(err => { 
                                    console.log('error adding'); 
                                })
                        }
                        
                        
                      
                    }).then(() => {
                        setGlobalState({loggedIn: true, user: profile})
                        navigate('./home')
                    }).catch(err => {
                        console.log(err)
                    }))
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

  

    return (
        <div>

           
<div className="login">
       
       <div className="login__illustration">
         
  
       </div>
       <div className="login__input-area">
         <div className="input-area__header">
             <h2>Welcome!</h2>
             <h4>Login below!</h4>
         </div>
         <div className="input-area__inputs">
           
           <div className="inputs__label-input-card">
             <label>Username</label>
             <input type={'text'} placeholder="abc123@lehigh.edu"></input>
           </div>
           <div className="inputs__label-input-card">
             <label>Password</label>
             <input type={'text'} placeholder='Password'></input>       
           </div>
           
           <button onClick={login}>Login with google</button>
         

         </div>
         <div className="input-area__footer">

         </div>
       </div>
   </div>
        
        </div>
    );
}

export default Login;