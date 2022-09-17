import React from "react";


import LoginRegisterForm from "../Components/LoginRegisterForm";

const LoginPage = () =>{
    return(
        <>
             <LoginRegisterForm loginOrRegister={"login"} />
        </>
    )
}

export default LoginPage;