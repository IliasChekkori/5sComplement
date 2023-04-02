import React from 'react';
import {StrictMode } from "react"; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
     
            <GoogleOAuthProvider clientId="692414481419-v4qb2tsgmk5s4tkrittmtte0i54kut13.apps.googleusercontent.com">
               <App /> 
            </GoogleOAuthProvider>

      
   
);  





