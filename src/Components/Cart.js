import React, {useState, useEffect} from 'react';
import CartContainer from './CartContainer';

function Cart({current_cart, cart, products, user}) {

    const [items, setItems] = useState([])
    // console.log(user)

    useEffect(() => {
        if (user !== undefined) {
            console.log('items:', user.products)
            setItems(user.products)
        }   
    }, [user])
    // if (current_cart.products.first.exist) {
    // if (cart.last.products.first.exist) {

    return (
        <div >
            {
                items?.length > 0 ? (
                    items.map(item => {
                        return (
                            <div key={item.id} className="featured-products-container">
                                <p>{item.title}</p> <p>${item.price}</p>
                                <img src={item.image_url}/>
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    )
            
            // } else {

    // return (
    //     <div className="about-us">
    //         <h1>Shopping Cart</h1>
    //         <p>The world is quiet here...</p>  
    //     </div>)
    // // };
};





export default Cart;