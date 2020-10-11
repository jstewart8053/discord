import { Button } from '@material-ui/core';
import React from 'react';
import '../Login.css';

function Login() {
    const signIn = () => {

    }
    return (
        <div className='login'>
            <h2> I am the login page </h2>
            <div className="login_logo">
                <img src='https://fontmeme.com/images/discord-logo-font.png' alt='discord logo' />
            </div>
            <Button onClick={signIn}> Sign in </Button>
        </div>
    )
}

export default Login;
