import React, {useState} from 'react';
import './login.css'
import loginbox from './loginbox.jpg'
import { attemptLogin } from './frontendlogin';

const LoginPage = (props) => {

    // ReactSession.setStoreType("sessionStorage");

    const [err, setErr] = useState(false)

    function displayErr(){

    }

    async function handleLoginSubmit(e){
        e.preventDefault();
        const loginResult = await attemptLogin(pwText)
        console.log(loginResult)
        if(loginResult.loggedIn){
            props.updateSessionStorage(loginResult)
        } else {
            setErr(true)
        }
        
    }


    const [pwText, setPwText] = useState('')
    function handleInputChange(e){
        const value = e.target.value
        setPwText(value)
    } 

    return (
        <div className='parent-wrapper'>

            <div className='img-buffer'></div>

            <img src = {loginbox} alt = 'login page' width = '600px' className='login-box'/>

            <div className='inner-login-div'> 
                <p> Enter password to use TY Template App </p>

                <input className={err ? 'err' : ''} onChange = {handleInputChange} value = {pwText}/> 

                <button type = 'submit' onClick = {handleLoginSubmit}> SUBMIT </button>
            </div>

            <div className='img-buffer'></div>
           
        </div>
    )
}

export default LoginPage;