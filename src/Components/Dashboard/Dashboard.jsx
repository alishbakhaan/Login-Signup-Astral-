import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
       <Link to="/">To Login</Link>
       <Link to="/register">To Register</Link>
    <br />  this is Dashboard page
    </div>
  )
}

export default Dashboard