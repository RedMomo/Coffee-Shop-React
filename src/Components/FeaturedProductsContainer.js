import FeaturedProductsListing from './FeaturedProductsListing';
import React, {useState, useEffect} from 'react';

function FeaturedProductsContainer() {
  // const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch ("http://localhost:3000/products")
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
    </div>
  );
}







export default FeaturedProductsContainer;