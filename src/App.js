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

function App() {
  // const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([])
  const jwt_token = localStorage.getItem("jwt")
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    fetch('http://localhost:3000/me', {
      method: 'GET',
      headers: {
        'Authorization': "Bearer " + jwt_token
      }
    })
    .then(res => res.json())
    .then(user => {
      console.log('user:', user)
      setUser(user)
    })
  }, [])

    useEffect(() => {
      fetch("http://localhost:3000/products", {
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products, "fetching coffees!");
        setProducts(products);
      })
    }, []);


  return (
    <div className="">
    
      <Header user={user}/>
      <Routes>

          {jwt_token ? 
            
              (
              <>
                <Route exact path="/adminpage" element={<AdminPage setProducts={setProducts} products={products}/>} /> 
                <Route exact path="/userpage" element={<UserPage />} /> 
                <Route exact path="/cart" element={<Cart user={user}/>} />
              </>
              )
            : 

            (
              <Route exact path="/redirect" element={<Navigate to="/login" replace/>} />
            )
        }

        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/shop" element={<AllProductsContainer setProducts={setProducts} products={products} />}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        </Routes>
          
          {/* // <Route exact path="/logout" element={<Logout setUser={setUser}/>} />   */}
          
          
          
      <Footer />     
  </div>
  )
}

export default App;
