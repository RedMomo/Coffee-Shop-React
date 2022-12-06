
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logout from './Logout';
import AdminCRUDForm from './AdminCRUDForm';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import AdminCardsContainer from './AdminCardsContainer';
// import DeleteForm from './DeleteForm';

export const AdminPage = ({user, newProduct}) => {
  const [products, setProducts] = useState([]);
  const newProducts = (product) => {
    setProducts([...products, product]);
  };

  // const deleteProduct = (products)
  
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
        <AdminCardsContainer products={newProducts} />
      </div>
      )
  }
}







export default AdminPage;