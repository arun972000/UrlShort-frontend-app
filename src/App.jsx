
import './App.css'
import Login from './Components/login'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import RegistrationForm from './Components/register'
import ResetPass from './Components/Password/resetpass'
import PasswordVerify from './Components/Password/passwordverify'
import ProtectRoute from './ProtectRoute'
import ResetPasswordForm from './Components/Password/PassworForm'
import LoginVerify from './Components/login_verify'
import Shorten from './Components/short'

function App() {


  return (
    <>
   
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/resetPass" element={<ResetPass/>}/>
      <Route path="/verifyPass" element={<PasswordVerify/>}/>
      <Route path="/passwordForm" element={<ProtectRoute element={<ResetPasswordForm/>}/>}/>
      <Route path="/userVerify" element={<LoginVerify/>}/>
      <Route path="/short/:id" element={<Shorten/>}/>
     </Routes>
    </>
  )
}

export default App
