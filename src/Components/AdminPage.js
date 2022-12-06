import AdminDashboard from './AdminDashboard';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logout from './Logout';
import AdminCRUDForm from './AdminCRUDForm';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
// import DeleteForm from './DeleteForm';

export const AdminPage = ({user, newProduct}) => {
  // const [users, setUsers] = useState([]);
  
  const navigate = useNavigate()
      let token = localStorage.getItem('jwt')
  if (token === null ){
          navigate('/login')
          console.log("no token found") 
          return null
  } else {
      console.log("token found")
      return (
        <div>
        <h1>Admin Dashboard</h1>
        < CreateForm />
        < EditForm />
        {/* < DeleteForm /> */}
        {/* <NavLink
          to="/Landing"
        >
          <button className='card-button-shop-all'>Logout</button>
        </NavLink> */}
      </div>
      )
  }
}







export default AdminPage;