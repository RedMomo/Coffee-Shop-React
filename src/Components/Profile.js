import React from 'react'
import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
import Login from './Login'
import Logout from './Logout'
// import {useNavigate} from 'react-router-dom'
// import { useState, useEffect } from 'react';

function Profile({user, setProducts}) {
    // const navigate = useNavigate()
    if (user.admin === true) {
        return(
            <div> <AdminPage user={user} setProducts={setProducts}/>
            <Logout />
            </div> )
    } else if (user.admin === false) {
        return (
            <div>
                <UserPage  user={user}/>
            </div>
    )
    } else {
        return (
            <div>
                <Login />
            </div>
        )
    }
    
}

export default Profile