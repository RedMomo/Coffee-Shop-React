import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function ProductCard({products}) {
  console.log(products)
  const [cart_items, setCart_Items] = useState([])
  const token = localStorage.getItem('jwt');
  const [product_id, setProduct_Id] = useState()
  const [quantity, setQuantity] = useState(1)

  const [cart, setCart] = useState({})
  
  const handleAddToCart = () => {
    console.log("click!")

    fetch("http://localhost:3000/current_cart", {
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
      },
    })
    .then(res => res.json())
    .then( cart => setCart(cart))

    fetch('http://localhost:3000/me', {
      method: 'GET',
      headers: {
        'Authorization': "Bearer " + token
      }
    })
    .then(res => res.json())
    .then(user => {
      console.log(user.carts[0].id)
      
      fetch("http://localhost:3000/cart_items", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
  
        },
        body: JSON.stringify({
          cart_id: user.carts[0].id,
          product_id: products.id,
          quantity: quantity,
        })
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "added cart items!");
        // setCart_Items([...cart_items, cart_item]);
  });
    })
    
  }
    
    

  return (
    <li className="">
      {/* {products.featured ? (<p> Featured </p>) : null} */}
      {/* <h5>{products.single_origin ? "Single Origin" : null}</h5> */}
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
      
      {/* <NavLink
        to={`/products/${products.id}`}
        // className="card-button-secondary"
        // activeStyle={{
        //   color: "lightseagreen",
        // }}
      >
        <button className="card-button-secondary"> View Details </button>
      </NavLink> */}
    </li>
  );
}

export default ProductCard;