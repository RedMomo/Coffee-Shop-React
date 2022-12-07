import React, { useEffect } from 'react';
import { useState } from 'react';
// import CartData from './CartData';

function CartContainer({carts, setCarts}) {
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
  .then( cart => setCart(cart))
}, cart);


  // useEffect(() => {
  //   fetch("http://localhost:3000/carts")
  //   .then((res) => res.json())
  //   .then((carts) => {
  //     console.log(carts, "fetching carts!");
  //     setCarts(carts);
  //   })
  // }, []);

  

  return (
    <div className="all-products-container">
      <CartData />
      {/* <CartData carts={carts} setCarts={setCarts} /> */}

    </div>
  );
}

export default CartContainer;