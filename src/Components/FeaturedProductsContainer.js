import FeaturedProductsListing from './FeaturedProductsListing';
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function FeaturedProductsContainer() {
  // const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('jwt');

  useEffect(() => {
  fetch ("http://localhost:3000/products", {
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + token,
  },
})
  .then((res) => res.json())
  .then((products) => {
    console.log(products, "fetching coffees!");
    setProducts(products);
  })
}, []);

  const featuredProducts = products.filter((product) => {
    return product.featured === true;
  });

  return (
    <div className="featured-products-container">
      <h2 className='featured-products-text'>Featured Products</h2>
      <FeaturedProductsListing products={featuredProducts}/>
      {/* if (products.featured === true) {
        <FeaturedProductsContainer products={featuredProducts}/>
      } else { null } */}
      <NavLink
        to={"/shop"}
        // className="card-button-secondary"
        // activeStyle={{
        //   color: "lightseagreen",
        // }}
      >
        <button className="card-button-shop-all"> Shop All </button>
      </NavLink>
    </div>
  );
}







export default FeaturedProductsContainer;