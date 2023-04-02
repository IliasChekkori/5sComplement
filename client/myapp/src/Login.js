import React, { useState, useEffect, useContext } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GlobalContext } from './App';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [globalState, setGlobalState] = useContext(GlobalContext);
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();  

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse); 
        setGlobalState({loggedIn: true, user: codeResponse});
        navigate('/home');
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
           
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
        
        </div>
    );
}

export default Login;