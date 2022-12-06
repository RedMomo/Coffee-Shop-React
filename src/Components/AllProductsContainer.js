import React, { useEffect } from 'react';
import { useState } from 'react';
import AllProductsListing from './AllProductsListing';
import Searchbar from './Searchbar';
// import Filter from './Filter';

function AllProductsContainer() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")
  // const [filters, setFilters] = useState({ type: "all" });

  // function handleChangeType(type) {
  //   setFilters({ type: type });
  // }
  // function handleFindCoffeeClick() {
  //   if (filters.type !== "all") {
  //     url += `?type=${filters.type}`;
  //   }
  //   fetch("http://localhost:3000/products"")
  //     .then((r) => r.json())
  //     .then((products) => {
  //       setProducts(products);
  //     });
  // }

  const newProducts = (product) => {
    setProducts([...products, product]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((products) => {
      console.log(products, "fetching coffees!");
      setProducts(products);
    })
  }, []);


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