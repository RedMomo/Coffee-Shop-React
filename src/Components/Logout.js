import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
// import Logout from './Logout.js';
// import { Route, Switch } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
// alternative to route?

export const Logout = ({setUser}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        localStorage.removeItem('jwt')
        navigate('/')
        console.log("logout");

    }
    return (
      // <NavLink
      //   to="/Logout"
      // >
      //   <button className='card-button-primary' onClick={handleClick}>Logout</button>
      // </NavLink>
        <button className='card-button-primary' onClick={handleClick}>Logout</button>
    )
}

export default Logout;