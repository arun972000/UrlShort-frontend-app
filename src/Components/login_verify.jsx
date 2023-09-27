import axios from "axios";
import { useSearchParams ,Link } from "react-router-dom";
import { Url } from "../Url";
import { useEffect, useState } from "react";


const LoginVerify=()=>{
const [isVerified,setisVerified]=useState(false)
    const [params,]=useSearchParams();
    const verifyApi=async()=>{
        try{
            await axios.post(`${Url}api/loginVerify`,{verifyToken:params.get("token")})
            alert("User verified now you can login")
            setisVerified(true)
        }catch(err){
            console.log(err)
            setisVerified(false)
        }
        
    }

    useEffect(()=>{
        verifyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
return(
    <>
    {isVerified && <Link to="/login">click here to login</Link>}
    {!isVerified && "please try again"}
    </>
)

}

export default LoginVerify