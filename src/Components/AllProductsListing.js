import React from "react";
import ProductCard from "./ProductCard";

function AllProductsListing({products}) {
  return (
    <ul className="cards">
      {products.map((products) => {
        return <ProductCard key={products.id} products={products}></ProductCard>})}
    </ul>
  )
}


export default AllProductsListing;