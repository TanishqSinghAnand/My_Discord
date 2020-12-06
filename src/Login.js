import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="Discord Logo"/>

            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
