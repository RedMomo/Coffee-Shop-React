import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function ProductCard({products}) {
    const handleAddToCart = () => {
      console.log("add to cart")
    };


  return (
    <li className="">
      {/* <h5 className="product-banner">{products.featured ? "Featured" : "Tasty Coffee" }</h5> */}
      {/* <h5 className="product-banner">{products.single_origin ? "Single Origin" : "Tasty Coffee"}</h5> */}
      <img src={products.image_url} alt={products.title} />
      <p>{products.roast}</p>
      <p><em>{products.title}</em>, ${products.price}</p>
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

export default ProductCard;