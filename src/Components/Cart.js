import React, { useEffect, useState } from 'react';
import CartData from './CartData.js';

function Cart({user, count, products}) {
    const jwt_token = localStorage.getItem("jwt");
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        fetch('/carts',{
            method: 'GET',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCartData(res)
                console.log(res)
            })
            console.log(cartData)
    }, 
    [])


    return (
        <div className="about-us">
            <h1>Shopping Cart</h1>

            
            <p>The world is quiet here...</p>
            <CartData foods={CartData[0]?.products} count={count} />
            <button type="button" className="card-button-shop-all">Checkout</button>
            {/* above will be conditional  */}
        </div>
    );
    // include className='login-header' in the div below
}





export default Cart;