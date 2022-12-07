import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function AdminCards({product, products, setProducts}) {
  const token = localStorage.getItem('jwt');
    
    function handleDeleteClick() {
      let updatedProducts = products.filter((item) => item.id !== product.id) 
      setProducts(updatedProducts)
      fetch(`http://localhost:3000/products/${product.id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
        },
      });
      console.log("delete!");
    }

  return (
    <li className="">
        <p>ID#: {product.id}</p>
      <img src={product.image_url} alt={product.title} />
      <h3><em>{product.title}</em>, ${product.price}</h3>
      <h4>{product.roast} {product.single_origin ? " & Single Origin" : null}</h4>
      <details className="descriptions"> 
      <summary className="descriptions-label"> View Details </summary>{product.description}</details>
  
      {/* <button type="submit" className="">Edit Product</button> */}
      <button onClick={handleDeleteClick} type="submit" className="red-button">Delete Product</button>
    </li>
  );
}

export default AdminCards;