import { useEffect } from "react";

export default function Logout(){
    useEffect(()=>{
        alert("logged out");
        localStorage.removeItem('uname')
        window.location.href='/'
    },[])
}