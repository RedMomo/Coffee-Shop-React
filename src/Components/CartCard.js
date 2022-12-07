import React, { useState } from "react";


function CartCard({cart, carts, setCarts}) {

  return (
    <li className="">
        <p>ID#: {cart.product}</p>
    </li>
  );
}

export default CartCard;