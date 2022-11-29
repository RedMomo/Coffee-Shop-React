import AllProductsListing from './AllProductsListing';
import Searchbar from './Searchbar';
import Filter from './Filter';



function AllProductsContainer(props) {
  return (
    <div className="all-products-container">
      <Searchbar />
      <Filter />
      <AllProductsListing />
    </div>
  );
}










export default AllProductsContainer;