import React, { useEffect } from 'react';
import { useState } from 'react';
import AdminCardsListing from './AdminCardsListing';

function AdminCardsContainer({products, setProducts}) {
  

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((products) => {
      console.log(products, "fetching coffees!");
      setProducts(products);
    })
  }, []);

  

  return (
    <div className="all-products-container">
      <AdminCardsListing products={products} setProducts={setProducts} />
    </div>
  );
}

export default AdminCardsContainer;