import React, {useState} from 'react';
import './login.css'
import loginbox from './loginbox.jpg'

const LoginPage = (props) => {

    const [err, setErr] = useState(false)

    function displayErr(){

    }

    function handleLoginSubmit(){
        
    }

    return (
        <div className=''>

            <img src = {loginbox} alt = 'login page' width = '600px' className='login-box'/>

            <div className='inner-login-div'> 
                <p> Enter password to use TY Template App </p>

                <input className={err ? 'err' : ''}/> 

                <button type = 'submit' onClick = {handleLoginSubmit}> SUBMIT </button>
            </div>
           
        </div>
    )
}

export default LoginPage;