import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function ProductCard({products}) {
  const handleAddToCart = () => {
    fetch(`http://localhost:3000/carts`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    });
    console.log("add to cart");
    console.log(products);
  };

  return (
    <li className="">
      <img src={products.image_url} alt={products.title} />
      <h3><em>{products.title}</em>, ${products.price}</h3>
      <h4>{products.roast} {products.single_origin ? " & Single Origin" : null}</h4>
      <details className="descriptions"> 
      <summary className="descriptions-label"> View Details </summary>{products.description}</details>
      {/* {products.inStock ? (
        <button onClick={handleAddToCart} className=""> Add to Cart </button>
      ) : (
        <button> Out of Stock </button>
      )} */}
      <button onClick={handleAddToCart} className="card-button-primary"> Add to Cart </button>

    </li>
  );
}

export default ProductCard;