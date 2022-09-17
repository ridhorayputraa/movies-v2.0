import React from "react";


import LoginRegisterForm from "../Components/LoginRegisterForm";

const RegisterPage = () =>{
    return(
        <>
             <LoginRegisterForm loginOrRegister={"register"} />
        </>
    )
}

export default RegisterPage;