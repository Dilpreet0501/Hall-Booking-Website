import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="770665074123-4kj7kvh4bh7f3aol6hs1g0ini22ps0ah.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
);

