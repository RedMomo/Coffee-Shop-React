import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function FeaturedProductCard({products}) {

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
  }
    
    useEffect(() => {
    fetch("http://localhost:3000/cart_items", {
           method: "POST",
           headers: {
             "content-type": "application/json",
             "Authorization": "Bearer " + token,
     
           },
           body: JSON.stringify({
             cart_id: 1,
             product_id: products.id,
             quantity: quantity,
           }),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(cart_items, "added cart items!");
             // setCart_Items([...cart_items, cart_item]);
           });
          }, [cart]);

  return (
    <li className="">
      <img src={products.image_url} alt={products.title} />
      <h3><em>{products.title}</em>, ${products.price}</h3>
      <h4>{products.roast} {products.single_origin ? " & Single Origin" : null}</h4>
      <details className="descriptions"> 
      <summary className="descriptions-label"> View Details </summary>{products.description}</details>
      
      <button onClick={handleAddToCart} className="card-button-primary"> Add to Cart </button>
    </li>
  );
}

export default FeaturedProductCard;