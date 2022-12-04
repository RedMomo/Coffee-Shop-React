import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function FeaturedProductCard({products}) {
    const handleAddToCart = () => {
      console.log("add to cart")
    };


  return (
    <li className="">
      {/* {products.featured ? (<p> Featured </p>) : null} */}
      {/* <h5>{products.single_origin ? "Single Origin" : null}</h5> */}
      <img src={products.image_url} alt={products.title} />
      <h4><em>{products.title}</em>, ${products.price}</h4>
      <h5>{products.roast} {products.single_origin ? " & Single Origin" : null}</h5>
      {/* {products.inStock ? (
        <button onClick={handleAddToCart} className=""> Add to Cart </button>
      ) : (
        <button> Out of Stock </button>
      )} */}
      <button onClick={handleAddToCart} className="card-button-primary"> Add to Cart </button>
      
      <NavLink
        to={`/products/${products.id}`}
        // className="card-button-secondary"
        // activeStyle={{
        //   color: "lightseagreen",
        // }}
      >
        <button className="card-button-secondary"> View Details </button>
      </NavLink>
    </li>
  );
}

export default FeaturedProductCard;