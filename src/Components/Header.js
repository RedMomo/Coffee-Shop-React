import Login from './Login';
import Logout from './Logout';
import About from './About';
// import Contact from './Contact';
import Cart from './Cart';
import Landing from './Landing';
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const linkStylesLeft = {
  display: "inline-block",
  float: "left",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "black",
  fontSize: "18px",
};

const linkStylesCenter = {
  display: "inline-block",
  align: "center",
  width: "450px",
  padding: "12px",
  // margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "lightseagreen",
  fontWeight: "bold",
  fontSize: "25px",
  FontFace: "Baskerville Old Face",

};

const linkStylesRight = {
  display: "inline-block",
  float: "right",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "black",
  activeStyle: {color: "lightseagreen"},
  fontSize: "18px",
};

function Header() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  const jwt_token = localStorage.getItem("jwt");
  // console.log(jwt_token);
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
    <div className='header'>
       <NavLink
        to="/shop"
        style={linkStylesLeft}
        activestyle={{
          color: "lightseagreen",
        }}
      >
        Shop 
      </NavLink>

      <NavLink
        to="/about"
        style={linkStylesLeft}
        activestyle={{
          color: "lightseagreen",
        }}
      >
        About
      </NavLink>

      {/* <NavLink
        to="/contact"
        style={linkStylesLeft}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Contact
      </NavLink> */}

      <NavLink
        to="/"
        style={linkStylesCenter}
        className="header-h1"
        activestyle={{
          color: "lightseagreen",
        }}
      >
        Emotional Support Coffee
      </NavLink>

    {/* {user.admin === true ?  */}

      <NavLink
      to="/adminpage"
      style={linkStylesRight}
      activestyle={{
        color: "lightseagreen",
      }}
    >
      My Account
    </NavLink>
      {/* : */}
      <NavLink
        to="/login"
        style={linkStylesRight}
        activestyle={{
          color: "lightseagreen",
        }}
      >
        Login
      </NavLink>
{/* } */}

      <NavLink
        to="/cart"
        style={linkStylesRight}
        activestyle={{
          color: "lightseagreen",
        }}
      >
        Cart
      </NavLink>
      

    </div>
  );
}


export default Header;