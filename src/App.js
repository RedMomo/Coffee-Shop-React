import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import AllProductsContainer from './Components/AllProductsContainer';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Logout from './Components/Logout';
import AdminPage from './Components/AdminPage';
import UserPage from './Components/UserPage';
// import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import Profile from './Components/Profile';
import { Routes, Route } from "react-router-dom";
import {useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function App(products) {
  // const navigate = useNavigate()
  const [user, setUser] = useState({});
  // const [products, setProducts] = useState([])
  const jwt_token = localStorage.getItem("jwt");

    useEffect(() => {
      fetch('/me',{
        method: 'GET',
        headers: {
          Authorization: "Bearer " + jwt_token,
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(user => setUser(user))
    }, [ jwt_token])


  return (
    <div className="">
    
      <Header />
        <Routes>
         {/* {user ? <Route exact path="/adminpage" element={<AdminPage />} /> &&
          <Route exact path="/userpage" element={<UserPage />} /> &&
          <Route exact path="/logout" element={<Logout />} /> 
            : 
          <Route path="/" element={<Landing />} /> &&
          <Route path="/Landing" element={<Landing />} /> &&
          <Route exact path="/shop" element={<AllProductsContainer />} /> &&
          <Route exact path="/about" element={<About />} /> &&
          <Route exact path={`/products/${products.id}`} element={<ProductDetails />} /> &&
          <Route exact path="/signup" element={<Signup />} /> &&
          <Route exact path="/login" element={<Login />} /> &&
          <Route exact path="/cart" element={<Cart />} /> } */}

          {/* {user.admin ? <Navigate to="/adminpage" /> : <Navigate to="/landing" />} */}


          <Route exact path="/adminpage" element={<AdminPage />} /> 
          <Route exact path="/userpage" element={<UserPage />} /> 
          <Route exact path="/logout" element={<Logout setUser={setUser}/>} />  
          <Route path="/" element={<Landing />} /> 
          <Route path="/Landing" element={<Landing />} /> 
          <Route exact path="/shop" element={<AllProductsContainer />} /> 
          <Route exact path="/about" element={<About />} /> 
          <Route exact path={`/products/${products.id}`} element={<ProductDetails />} /> 
          <Route exact path="/signup" element={<Signup setUser={setUser} />} /> 
          <Route exact path="/login" element={<Login setUser={setUser}/>} /> 
          <Route exact path="/cart" element={<Cart />} /> 
          
        </Routes>  
      <Footer />     
  </div>
  )
}

export default App;
