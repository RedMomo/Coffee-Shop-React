
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import AdminCardsContainer from './AdminCardsContainer';
// import DeleteForm from './DeleteForm';

export const AdminPage = ({user, product, products, setProducts}) => {
  // const [products, setProducts] = useState([]);
  const newProducts = (products) => {
    newProducts([...products, product]);
  };
  
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
        <h1>Dashboard</h1>
        <CreateForm products={products} setProducts={setProducts} />
        <EditForm setProducts={setProducts}/>
        <AdminCardsContainer products={products} setProducts={setProducts} />
      </div>
      )
  }
}







export default AdminPage;