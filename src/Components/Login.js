import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('jwt');

const handleSubmit = (e) => {
  e.preventDefault();
  
  const user = {
    username: username,
    password: password
  }
  // console.log(user)


  fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        // console.log(user);
        setUser(data.user);
        navigate("/adminpage");
      })

    }

  return (
    <div>
      <h2 className='login-header'>Login</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input'>
          <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => {
            // console.log(e.target.value);
            setUsername(e.target.value)
          }}/>
        </div>
        <div className='input'>
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => {
            // console.log(e.target.value);
            setPassword(e.target.value)
            }}/>
        </div>
        <button className='card-button-primary'>Login</button>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
  }

export default Login;







// export default Login; 