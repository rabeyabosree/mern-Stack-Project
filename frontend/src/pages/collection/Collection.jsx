import { useContext, useEffect, useState } from 'react';
import ShowSerch from './ShowSerch';
import { Contex } from '../contex/ShopContex';
import Title from './../products/Title';
import SingleProduct from './../products/SingleProduct';
import Footer from './../../components/Footer';

function Collection() {
  const { products, Search, ShowSearch } = useContext(Contex);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Toggle filter for category and subcategory
  const toggleFilter = (value, setter, state) => {
    setter(prevState =>
      prevState.includes(value)
        ? prevState.filter(item => item !== value)
        : [...prevState, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];
    
    // Search filter
    if (Search && ShowSearch) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(Search.toLowerCase())
      );
    }

    // Category filter
    if (category.length) {
      filtered = filtered.filter((product) => category.includes(product.category));
    }

    // Subcategory filter
    if (subCategory.length) {
      filtered = filtered.filter((product) => subCategory.includes(product.subCategory));
    }

    return filtered;
  };

  // Sort handler (e.g., for Price sorting)
  const applySorting = (productsList) => {
    switch (sortType) {
      case "low":
        return productsList.sort((a, b) => a.price - b.price);
      case "high":
        return productsList.sort((a, b) => b.price - a.price);
      default:
        return productsList;
    }
  };

  // Apply filtering and sorting whenever dependencies change
  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting(filtered);
    setFilteredProducts(sorted);
    setCurrentPage(1); // Reset to the first page
  }, [category, subCategory, sortType, Search, ShowSearch, products]);

  // Pagination - Get products to show on the current page
  const getPaginationProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  };

  // Calculate total pages dynamically
  const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="max-padd-container !px-0  overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-8 mb-16 h-full">
        {/* Filter Section for Categories */}
        <div className="min-w-72 bg-primary p-4 pt-8 pl-6 lg:pl-12 rounded-r-xl shadow-lg h-full overflow-auto">
          <ShowSerch />

          {/* Categories */}
          <div className="pl-5 py-3 mt-6 bg-white rounded-xl">
            <h5 className="text-xl font-semibold text-gray-700 mb-4">Categories</h5>
            <div className="space-y-2">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 hover:bg-gray-100 transition duration-200 p-2 rounded">
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={(e) => toggleFilter(e.target.value, setCategory, category)}
                    className="w-4 h-4"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Types */}
          <div className="pl-5 py-3 mt-6 bg-white rounded-xl">
            <h5 className="text-xl font-semibold text-gray-700 mb-4">Types</h5>
            <div className="space-y-2">
              {["TopWear", "Bottomwear", "Winterwear"].map((subcat) => (
                <label key={subcat} className="flex items-center gap-2 hover:bg-gray-100 transition duration-200 p-2 rounded">
                  <input
                    type="checkbox"
                    value={subcat}
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory, subCategory)}
                    className="w-4 h-4"
                  />
                  <span>{subcat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By Section */}
          <div className="px-4 py-3 mt-6 bg-white rounded-xl">
            <h5 className="text-xl font-semibold mb-4">Sort By</h5>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-slate-900/5 outline-none text-gray-700 medium-14 h-8 w-full rounded-md px-2"
            >
              <option value="relevant">Relevant</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-primary p-2 rounded-l-xl h-full overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 ">
            {getPaginationProducts().length > 0 ? (
              getPaginationProducts().map((product) => (
                <SingleProduct key={product.name} product={product} />
              ))
            ) : (
              <p className="capitalize text-center text-gray-600">No products found for selected filters.</p>
            )}
          </div>

          {/* Pagination Section */}
          <div className="flex justify-center gap-4 mt-6 mb-6">
            {/* Previous Button */}
            <button 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""} btn-light py-1 px-4 rounded-md`}
            >
              Previous
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPage }, (_, index) => (
              <button 
                key={index + 1} 
                onClick={() => setCurrentPage(index + 1)}
                className={`${currentPage === index + 1 ? "!bg-tertiary text-white" : "btn-light"} py-1 px-3 rounded-md transition duration-200`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              disabled={currentPage === totalPage}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={`${currentPage === totalPage ? "opacity-50 cursor-not-allowed" : ""} btn-light py-1 px-4 rounded-md`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collection;


