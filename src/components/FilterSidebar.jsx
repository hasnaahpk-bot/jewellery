const FilterSidebar = ({
  filters,
  products,
  selected,
  onChange,
  open,          // 👈 boolean (mobile)
  onClose,       // 👈 function (mobile)
}) => {
  const toggle = (label) => {
    if (selected.includes(label)) {
      onChange(selected.filter((l) => l !== label));
    } else {
      onChange([...selected, label]);
    }
  };

  // 🔢 REAL COUNT LOGIC
  const getCount = (section, label) => {
    if (section === "Categories") {
      return products.filter((p) => p.category === label).length;
    }
    return 0;
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static z-50
          top-0 left-0 h-full
          w-64
          bg-[#4D4D33] text-white
          p-4 shrink-0
          overflow-y-auto
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4 border-b border-white/30 pb-2">
          <h2 className="text-sm font-semibold">Filter</h2>

          {/* mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden text-sm text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* FILTER SECTIONS */}
        {Object.entries(filters).map(([section, items]) => (
          <div key={section} className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-lime-200">
              {section}
            </h3>

            <div className="space-y-2">
              {items.map((item) => {
                const isActive = selected.includes(item.label);
                const count = getCount(section, item.label);

                return (
                  <label
                    key={item.label}
                    className={`
                      flex cursor-pointer items-center justify-between
                      text-sm px-2 py-1 rounded transition
                      ${
                        isActive
                          ? "text-[#F0F0D6]"
                          : "text-[#A3A7AB] hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => toggle(item.label)}
                        className="accent-lime-400"
                      />
                      <span>{item.label}</span>
                    </div>

                    <span
                      className={`
                        text-xs
                        ${
                          isActive
                            ? "text-[#F0F0D6]"
                            : "text-[#A3A7AB]"
                        }
                      `}
                    >
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>

            <hr className="mt-4 border-white/20" />
          </div>
        ))}
      </aside>
    </>
  );
};

export default FilterSidebar;
