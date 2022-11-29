import FeaturedProductsListing from './FeaturedProductsListing';
import AllProductsContainer from './AllProductsContainer';



function FeaturedProductsContainer(props) {
  return (
    <div className="featured-products-container">
      <FeaturedProductsListing />
      <AllProductsContainer />
    </div>
  );
}







export default FeaturedProductsContainer;