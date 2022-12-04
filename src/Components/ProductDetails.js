import React, { useState } from "react";

function ProductDetails({products}) {

  const handleAddToCart = () => {
    console.log("add to cart")
  };


  return (
    <div className="">
    <h1> Product Stuff </h1>
    <li className="">
      {products.featured ? (<p> Featured </p>) : null}
      <h5>{products.single_origin ? "Single Origin" : null}</h5>
      <img src={products.image_url} alt={products.title} />
      <p>{products.roast}</p>
      <p>{products.price}</p>
      {/* {products.inStock ? (
        <button onClick={handleAddToCart} className=""> Add to Cart </button>
      ) : (
        <button> Out of Stock </button>
      )} */}
      <button onClick={handleAddToCart} className=""> Add to Cart </button>
      <p>{products.title}</p>
      <p>{products.description}</p>
    </li>
    </div>
  );
}

export default ProductDetails;