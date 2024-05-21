import React from 'react'
import '../Login/Login.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import BgVideo from '../../assets/video.mp4'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import '../../App.css'
const Login = () => {
  return (
    <div className='loginPage flex'>
     <div className="container flex">
        
          <div className="videoDiv">
            <video src={BgVideo} autoPlay muted loop></video>

            <div className="textDiv">
              <h2 className="title">Astral Developers Multimedia inc.</h2>
              <p>Login to your personal dashboard.</p>
            </div>

            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to="/register">
                  <button className='btn'>Sign Up</button>
                </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={Logo} alt="logo Image" />
              <h3>Welcome Back!</h3>
            </div>
          

           <form action="" className='form grid'>
            <span className='showMessage'>Login Status will go here</span>

             <div className="inputDiv">
            
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" name="" id="username" placeholder='Enter Username' required />
              </div>
             </div>

             <div className="inputDiv">
             
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type="password" name="" id="password" placeholder='Enter Password' required />
              </div>
             </div>

             <button type='submit' className='btn flex'>
              <span>Login</span>
             <AiOutlineSwapRight className='icon'/>
             </button>

             <span className="forgetPassword">
              Forgot Your Password? <a href="">Click Here</a>
             </span>
          </form>
          </div>
     </div>
    </div>
  )
}

export default Login




      // <Link to="/register">To Register</Link>
      // <Link to="/dashboard">To Dashboard</Link>