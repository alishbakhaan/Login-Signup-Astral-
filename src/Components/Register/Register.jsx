import React,{useState} from 'react'
import '../Register/Register.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import BgVideo from '../../assets/video.mp4'
import { FaUserShield, FaUserLock} from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import Axios from 'axios';

const Register = () => {
  // use state to hold inputs
  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  
  // onclick let us get user information
  const createUser= ()=>{
    Axios.post('http://localhost:3002/register',{
      Username: username,  
      Email: email,
      Password: password
    }).then(()=>{
      console.log('User has been created')
    })
  }
  return (
    <div className='registerPage flex'>
    <div className="container flex">
       
         <div className="videoDiv">
           <video src={BgVideo} autoPlay muted loop></video>

           <div className="textDiv">
             <h2 className="title">Astral Developers Multimedia inc.</h2>
             <p>Your'e Going to create your personal dashboard.</p>
           </div>

           <div className="footerDiv flex">
               <span className="text">Already have an account?</span>
               <Link to="/">
                 <button className='btn'>Login</button>
               </Link>
           </div>
         </div>

         <div className="formDiv flex">
           <div className="headerDiv">
             <img src={Logo} alt="logo Image" />
             <h3>Create Your Account!</h3>
           </div>
         

          <form action="" className='form grid'>
           <span className='showMessage'>Login Status will go here</span>

            <div className="inputDiv">
           
             <div className="input flex">
               <FaUserShield className='icon' />
               <input type="text" name="" id="username" placeholder='Enter Username' required 
               onChange={(Event)=>{setUsername(Event.target.value)}}/>
             </div>
            </div>

            <div className="inputDiv">
           
           <div className="input flex">
             <MdMarkEmailRead className='icon' />
             <input type="email" name="" id="email" placeholder='Enter Email' required 
             onChange={(Event)=>{setEmail(Event.target.value)}}/>
           </div>
          </div>

            <div className="inputDiv">
            
             <div className="input flex">
               <BsFillShieldLockFill className='icon' />
               <input type="password" name="" id="password" placeholder='Enter Password' required 
               onChange={(Event)=>{setPassword(Event.target.value)}}/>
             </div>
            </div>
{/* 
            <div className="inputDiv">
            
             <div className="input flex">
               <FaUserLock className='icon' />
               <input type="password" name="" id="password" placeholder='Confirm Password' required 
               onChange={(Event)=>{setPassword(Event.target.value)}}/>
             </div>
            </div> */}

            <button type='submit' className='btn flex'>
             <span>Sign Up</span>
            <AiOutlineSwapRight className='icon'/>
            </button>

            <span className="forgetPassword">
             Login with another account?<a href="">Click Here</a>
            </span>
         </form>
         </div>
    </div>
   </div>
  )
}

export default Register

    {/* <Link to="/">To Login</Link>
       <Link to="/dashboard">To Dashboard</Link>
     <br />  this is Register page */}