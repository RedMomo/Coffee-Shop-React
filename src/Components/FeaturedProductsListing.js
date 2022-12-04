import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

function FeaturedProductsListing({products}) {
  return (
    <ul className="cards">
      {products.map((products) => {
        return <FeaturedProductCard key={products.id} products={products}></FeaturedProductCard>})}
    </ul>
  )
}


export default FeaturedProductsListing;