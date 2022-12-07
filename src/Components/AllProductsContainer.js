import React, { useEffect } from 'react';
import { useState } from 'react';
import AllProductsListing from './AllProductsListing';
import Searchbar from './Searchbar';
// import Filter from './Filter';

function AllProductsContainer( {products, setProducts }) {

  const [search, setSearch] = useState("")
  const token = localStorage.getItem('jwt');

  const newProducts = (product) => {
    setProducts([...products, product]);
  };


  const searchedProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });


  return (
    <div className="all-products-container">
      <Searchbar search={search} setSearch={setSearch}/>
      {/* <Filter  onChangeType={handleChangeType}
              onFindCoffeeClick={handleFindCoffeeClick}/> */}
      <AllProductsListing products={searchedProducts}/>
    </div>
  );
}










export default AllProductsContainer;