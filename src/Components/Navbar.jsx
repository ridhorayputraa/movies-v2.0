import React from "react";

// Image !
import logo from '../assets/img/icon.png'
import logOutImg from '../assets/img/logout.png' 
import Anonym from '../assets/img/anonym.png'


// import avatar from '../assets/img/avataaars.svg'



// AVatar
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from '../assets/img/Avatar';

import {auth} from '../auth/firebase'

import { Logout } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// React Route DOM !
import { Link } from "react-router-dom";
const Navbar = () => {
    
    

  
    const [user] = useAuthState(auth)

  const buttonOnClickHandler = async() => {
      await Logout();
    //   navigate('/login');
    <Link to='/login'></Link>
  }



return(
    <div className="nav-wrapper">
        <nav>
   

            <ul>
                <li className="logo">
                 <img className="logo_img" src={logo}  alt="icon">
                 </img></li>
                <li className="list" ><Link to='/'>Home</Link></li>
                <li className="list"><Link to='/series'>Series</Link></li>
                <li className="list"><Link to='/movies'>Movies</Link></li>
                <li className="list"><Link to='/popular'>New & Popular</Link></li>
             
               {
                  user ? (
                    <li className="list2">{user.email}</li>
                  ) : <li className="list2"><Link to='/login'>Login</Link></li>
               } 

               {
                user ? (
                    <li className="list3"  onClick={buttonOnClickHandler}><img className="list3_img" src={logOutImg}  alt='logOut' ></img></li>
                ) : ""
               }
                  
                
                 
                
                <li className="list1">
                {/* <img src={avatar} width='40px' alt='ridhoray' /> */}
               {
                user ? (
                <Avatar className="avatar"

        
        avatarStyle='Circle'
        {...generateRandomAvatarOptions() } />
                  
                ) : <img src={Anonym} className="avatar_anonym"  alt="Anonym" />
               }
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar