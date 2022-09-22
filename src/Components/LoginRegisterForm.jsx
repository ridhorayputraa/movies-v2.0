import React,{useState, useEffect} from "react";

import {Link} from 'react-router-dom';

import it from '../assets/img/it02.jpg'

import emailCircle from '../assets/img/emailCircle.png'

import Lock from '../assets/img/padlock.png'


// Mui
import { Button,TextField, Typography} from '@mui/material'

// Import Fungction Logic dari firebase
import {
auth,
Login,
Register,
// Reset,
}
from '../auth/firebase'

import {useAuthState} from 'react-firebase-hooks/auth';

import {useNavigate} from 'react-router-dom'

const LoginRegisterForm = ({loginOrRegister}) => {

const navigate = useNavigate()

const [user, loading, error] = useAuthState(auth);

const [err, setErr] = useState(null)

const [credential, setCredential] = useState({
email: "",
password: "",
})

const textFIeldEmail = (event) => {
setCredential({
...credential,
email: event.target.value,
})
}


const textFIeldPassword = (event) => {
setCredential({
...credential,
password: event.target.value,
})

}


const validate= () => {
    if(credential.email.length <= 5 || credential.password.length <= 5){
        return  setErr('*Password Atau Email Harus Terdiri dari 6 Baris')
      } 
}


const loginHandler = () => {
       
    Login(credential.email, credential.password)
    validate()

};


const registerHandler = () => {
    Register(credential.email, credential.password);
    validate()
};


const buttonLoginOrRegisterOnCLickHandler  = () => {
    if(loginOrRegister === 'login'){
        loginHandler();
    }else{
        registerHandler();
    }
};




useEffect(
    () => {
     

        if(loading){
            return ;
        }

        if(error){
            return setErr(error.message);
        }



         if(user){
         
            navigate('/')
         }
       
    }, [loading, user, error ,navigate]
)


// const buttonResetPassWord = () => {
//     Reset(credential.email)
// }




return(
<div className="loginPage">
    <div className="card-Login">
    <div className="card-Login-image">
    
        <img alt='cardimage' src={it}></img>
</div>
        <div className="loginForm">
            {/* Text Login/Register */}
            <div className="textLogin">
            <div className="LoginForm-Text">
 <p>{postMessage}</p>


       
 
 
        
                <div className="loginForm-img-text">
                    <img  src={emailCircle} width='40px' alt="byRay" height='40px' />
                    <TextField minRows={6}  autoFocus={true} value={credential.email} className="textfield" variant="outlined" id="staandard" size='medium' label='EMAIL'
                        type='email' sx={{   input: {
            color: "rgb(200, 200, 200)",
           
          }, label: {
            color: "rgb(154, 154, 154)",
           
          } ,marginLeft:"1em"}} onChange={textFIeldEmail} />

                </div>

                {/* PAssword */}

                <div className="loginForm-img-text">
                    <img src={Lock} width='40px' alt="byRay" height='40px' />
                  
                    <TextField value={credential.password} className="textfield" variant="outlined" size='medium' label='PASSWORD' type='password' sx={{   input: {
            color: "rgb(200, 200, 200)",
           
          }, label: {
            color: "rgb(154, 154, 154)",
           
          } ,marginLeft:"1em"}} onChange={textFIeldPassword}></TextField>
                </div>
                <Typography className="Warning" variant='body1'>{err}</Typography>

                <Button className="textfield" variant="contained" sx={{ 
            backgroundColor: '#E50913',
             borderRadius:'4px',
           marginLeft:"4em",
        marginTop:'2em'
           ,
           "&.MuiButtonBase-root:hover": {
                bgcolor: "#be0c15"
              }
           }} onClick={buttonLoginOrRegisterOnCLickHandler} >
                    <Typography variant="h6">{loginOrRegister === 'login' ? 'LOGIN' : 'REGISTER'}</Typography>
                </Button>

                <Button className="textfield" variant="text" sx={{ 
           
             borderRadius:'4px',
           marginLeft:"4em",
        marginTop:'2em'
           ,
           "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
           }}>
           {loginOrRegister === 'login' ? (
                   <Link to='/register'>
                    <Typography variant="h7">+ Account</Typography>
                   </Link>
           ) :  <Link to='/login'>
                    <Typography variant="h7">Login Form</Typography>
                   </Link> } 
                    
                </Button>
               

            </div>
            </div>
          
        </div>


    </div>

</div>
)
}

export default LoginRegisterForm;