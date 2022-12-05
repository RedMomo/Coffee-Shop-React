import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
// import Logout from './Logout.js';
// import { Route, Switch } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
// alternative to route?

export const Logout = ({setUser}) => {
    const navigate = useNavigate();
    const handleClick = () => {
      // console.log("logout");
        localStorage.removeItem('jwt')
        // navigate('/logout')
    }
    return (
      <NavLink
        to="/"
      >
        <button className='logout' onClick={handleClick}>Logout</button>
      </NavLink>
    )
}

export default Logout; 