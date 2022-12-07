import React, { useEffect } from 'react';
import { useState } from 'react';
import CartCard from './CartCard';

function CartContainer({carts, product}) {
  const [cart, setCart] = useState({})
  const token = localStorage.getItem('jwt');
  
  useEffect(() => {
  fetch("http://localhost:3000/current_cart", {
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + token,
    },
  })
  .then(res => res.json())
  .then( current_cart => setCart(current_cart))
}, cart);



  return (
    <div className="all-products-container">
      <CartCard product={product}/>

    </div>
  );
}

export default CartContainer;