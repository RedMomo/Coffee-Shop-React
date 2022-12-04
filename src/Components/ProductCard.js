import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function ProductCard({products}) {
    // const linkStyles = {
    //   display: "inline-block",
    //   width: "50px",
    //   padding: "12px",
    //   margin: "0 6px 6px",
    //   background: "white",
    //   textDecoration: "none",
    //   color: "black",
    // };

    const handleAddToCart = () => {
      console.log("add to cart")
    };


  return (
    <li className="">
      {products.featured ? (<p> Featured </p>) : null}
      <h5>{products.single_origin ? "Single Origin" : null}</h5>
      <img src={products.image_url} alt={products.title} />
      <p>{products.roast}</p>
      <p><em>{products.title}</em>, ${products.price}</p>
      {/* {products.inStock ? (
        <button onClick={handleAddToCart} className=""> Add to Cart </button>
      ) : (
        <button> Out of Stock </button>
      )} */}
      <button onClick={handleAddToCart} className=""> Add to Cart </button>
      
      <NavLink
        to={`/products/${products.id}`}
        // exact
        // style={linkStyles}
        activeStyle={{
          color: "lightseagreen",
        }}
      >
        <button className=""> View Details </button>
      </NavLink>
    </li>
  );
}

export default ProductCard;