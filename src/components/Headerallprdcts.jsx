import React from "react";

const Headerallprdcts = ({
  selectedFilters = [],
  filteredItems = [],
  onRemoveFilter,
  onSortChange,
}) => {
  return (
    <div className="w-full rounded-xl bg-[#0f0f0f] text-white p-4 sm:p-6">
      {/* TOP */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-lg sm:text-xl font-semibold">Trending</h1>
        <span className="text-sm text-gray-400">
          {filteredItems.length} items found
        </span>
      </div>

      {/* BREADCRUMB */}
      <div className="mt-1 text-xs sm:text-sm text-gray-400">
        Home <span className="mx-1">›</span>
        <span className="text-[#cddc39]">Trending</span>
      </div>

      {/* FILTER + SORT */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* FILTER CHIPS */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-300">Filter by :</span>

          {selectedFilters.length === 0 && (
            <span className="text-sm text-gray-500">All</span>
          )}

          {selectedFilters.map((item) => (
            <span
              key={item}
              className="
                flex items-center gap-2
                rounded-full bg-[#6b7216]
                px-3 py-1 text-xs sm:text-sm
              "
            >
              {item}
              <button
                onClick={() => onRemoveFilter(item)}
                className="text-xs hover:text-red-300"
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        {/* SORT */}
        <div className="self-start sm:self-auto">
          <select
            onChange={(e) => onSortChange?.(e.target.value)}
            className="
              bg-[#F2FAB1] text-[#010F17]
              border border-lime-400/40
              text-sm px-3 py-2 rounded
              w-full sm:w-auto
            "
          >
            <option value="low">Sort by: Low → High</option>
            <option value="high">Sort by: High → Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Headerallprdcts;
