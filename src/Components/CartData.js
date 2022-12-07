import React from "react";
// import CartCard from "./CartCard";


function CartData({carts, setCarts}) {
  return (
    <ul className="cards">
      {carts.map((cart) => {
        return <CartCard key={cart.id} cart={cart} carts={carts} setCarts={setCarts}></CartCard>})}
    </ul>
  )
}


export default CartData;