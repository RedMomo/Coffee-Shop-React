import React from 'react';

function CartCard({product}) {

    return (
        <div className="cart-item">
            <h2>Cool Stuff: </h2>
            <img src={product.image} alt={product.title} />
            <div className="">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
        </div>
    )
};

export default CartCard;