import AdminDashboard from './AdminDashboard';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Logout from './Logout';


function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminDashboard />
      <NavLink
        to="/Landing"
      >
        <button className='card-button-shop-all'>Logout</button>
      </NavLink>
    </div>
  );
}








export default AdminPage;