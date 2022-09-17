import React from "react";
import Home from "../pages/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Popular from "../pages/Popular";
import Navbar from '../Components/Navbar';
import LoginPage from "../pages/LoginPage";
import Detailmovies from "../Components/DetailsMovie";


import {Box} from '@mui/material'
import WithoutNav from "./WithoutNav";
import WithNAvbar from "./WithNavbar";
import RegisterPage from "../pages/RegisterForm";
import LoginRegisterForm from "../Components/LoginRegisterForm";
import Notfound from "../Components/Notfound";
import ProtectedComponent from "../Components/Protected";

const Container = () => {
    return(
        <>

     
       
        <Routes>
        <Route element={<WithoutNav/>}>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        </Route>

         <Route element={<WithNAvbar/>}>      
                  <Route path="/" element={<Home user={LoginRegisterForm}/>}>
                  </Route>
                  
                    <Route path='/detail/:Id' element=
                    {
                <ProtectedComponent>  
                    
                    <Detailmovies />

                </ProtectedComponent>
                    }
                    /> 
                
                           <Route path="/series" element={<Series/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="*" element={<Notfound/>} />
            </Route>
            
        </Routes>
 
    
        </>
    )
}

export default Container