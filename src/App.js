import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import AllProductsContainer from './Components/AllProductsContainer';
import About from './Components/About';
import Login from './Components/Login';
import Logout from './Components/Logout';
// import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import { Routes, Route } from "react-router-dom";

function App(products) {
  return (
    <div className="">
    
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/shop" element={<AllProductsContainer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path={`/products/${products.id}`} element={<ProductDetails />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>  
      <Footer />     
  </div>
  )
}

export default App;
