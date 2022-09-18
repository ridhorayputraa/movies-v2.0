import React,{useEffect} from "react"

// react-router-Dom useNavigate
import { useNavigate } from "react-router-dom";


// user yang login
// si Auth + useAuthState
import { auth} from '../auth/firebase';
import { useAuthState } from "react-firebase-hooks/auth";


// ingin untuk membuat HOC / nge SLOT
// Harus menggunakan property bawaan React: Children
const ProtectedComponent = ({children}) => {
// Melindungi komponent kita
// Apabila tidak ada user yang login
// akan kita pindahkan ke halaman '/login'
const navigate = useNavigate();

// Kita disini cm pengen cek user, sambil berikan halaman loading bila belum ada user yang masuk

const [user, isLoading] = useAuthState(auth);


useEffect(
    () => {
        // kalau user tidak ada 
        // kita paksa ke halaman login
        // user kalau ga ketemu = null, null falsy, !falsy = truthy
        //    if not null || kalau usernya gada
        if(!user){
                 navigate('/login')
                 return;
        }
    },
    // deps list
    [user, navigate]
)

// kita sekarang ingin memanfaatkan loading 
// (supaya ga ada flashing)
if(isLoading){
    return;
}else{
    // kalau tidak ada isLoading (udah selesai!)
    // kita kembalikan si children yang mau di render !
    return children
}

}

export default ProtectedComponent;