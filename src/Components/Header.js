import Login from './Login';
import Logout from './Logout';
import About from './About';
// import Contact from './Contact';
import Cart from './Cart';
import Landing from './Landing';
import { NavLink } from "react-router-dom";


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
  return (
    <div>
       <NavLink
        to="/shop"
        exact
        style={linkStylesLeft}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Shop 
      </NavLink>

      <NavLink
        to="/about"
        exact
        style={linkStylesLeft}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        About
      </NavLink>

      {/* <NavLink
        to="/contact"
        exact
        style={linkStylesLeft}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Contact
      </NavLink> */}

      <NavLink
        to="/"
        exact
        style={linkStylesCenter}
        className="header-h1"
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Emotional Support Coffee
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={linkStylesRight}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Login
      </NavLink>

      <NavLink
        to="/logout"
        exact
        style={linkStylesRight}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Logout
      </NavLink>

      <NavLink
        to="/cart"
        exact
        style={linkStylesRight}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        Cart
      </NavLink>

    </div>
  );
}


export default Header;