import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Contex } from '../contex/ShopContex';

const ShowSearch = () => {
  const { showSearch, search, setSearch } = useContext(Contex);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show search bar when the path includes 'collection'
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  return showSearch && visible ? (
    <div className="py-4 pb-7">
      <div className="text-center">
        <div className="inline-flex items-center justify-between px-3 py-1.5 rounded-full bg-white overflow-hidden w-full max-w-md mx-auto">
          {/* Search input */}
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Products..."
            className="border-none outline-none w-full bg-white text-sm px-3 py-1 rounded-l-full"
          />
          
          {/* Search Icon */}
          <div className="flex items-center justify-center pl-2">
            <Search className="cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ShowSearch;

