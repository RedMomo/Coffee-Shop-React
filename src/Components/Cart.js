import React from 'react';
// import CartContainer from './CartContainer';

function Cart({cart, carts, setCarts}) {


    return (
        <div className="about-us">
            <h1>Shopping Cart</h1>
            <p>The world is quiet here...</p>

            {/* < CartContainer /> */}
            {/* < CartContainer carts={carts} setCarts={setCarts}/> */}

            <button type="button" className="card-button-shop-all">Checkout</button>
        </div>
    );
    // include className='login-header' in the div below
}





export default Cart;