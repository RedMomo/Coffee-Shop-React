import React from 'react'
import  CartDataCard  from './CartDataCard.js'

function CartData({count, products}) {
    return (
      <div>
       
  
          <CartDataCard products={products} count={count} />
         
      </div>
    )
  }

  export default CartData;