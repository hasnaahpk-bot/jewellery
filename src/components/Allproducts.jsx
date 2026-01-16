import React, { useState } from "react";
import { PRODUCTS } from "../constants/Products";
import Headerallprdcts from "./Headerallprdcts";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import { FILTERS } from "../constants/Filter";
import AppDownloadBanner from "./AppDownloadBanner";

const Allproducts = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState("low");
  const [openFilter, setOpenFilter] = useState(false); // ✅ mobile

  const filtered = PRODUCTS
    .filter((p) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(p.category);
    })
    .sort((a, b) =>
      sort === "low" ? a.price - b.price : b.price - a.price
    );

  const removeFilter = (label) => {
    setSelectedCategories((prev) =>
      prev.filter((item) => item !== label)
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex">

      {/* SIDEBAR */}
      <FilterSidebar
        filters={FILTERS}
        products={PRODUCTS}
        selected={selectedCategories}
        onChange={setSelectedCategories}
        open={openFilter}
        onClose={() => setOpenFilter(false)}
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col ">

        {/* HEADER */}
        <div className="shrink-0 px-4 pt-4">
          {/* mobile filter button */}
          <button
            onClick={() => setOpenFilter(true)}
            className="mb-3 lg:hidden text-sm px-3 py-2 rounded bg-[#d6ff3f] text-black"
          >
            Filter
          </button>

          <Headerallprdcts
            selectedFilters={selectedCategories}
            filteredItems={filtered}
            onRemoveFilter={removeFilter}
            onSortChange={setSort}
          />
        </div>

        {/* PRODUCTS (ONLY THIS SCROLLS) */}
        <div className="flex-1 overflow-y-auto px-4 py-6 no-scrollbar">
          {filtered.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-400">
              <p className="text-lg font-medium text-gray-300">
                No products found
              </p>
              <p className="mt-1 text-sm">
                Try another category or clear filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        <AppDownloadBanner/>
      </div>
      
    </div>
  );
};

export default Allproducts;
