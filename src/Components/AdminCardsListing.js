import React from "react";
import AdminCards from "./AdminCards";

function AdminCardsListing({products, setProducts}) {
  return (
    <ul className="cards">
      {products.map((product) => {
        return <AdminCards key={product.id} product={product} products={products} setProducts={setProducts}></AdminCards>})}
    </ul>
  )
}


export default AdminCardsListing;