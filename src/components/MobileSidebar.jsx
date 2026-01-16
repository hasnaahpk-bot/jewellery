import { NavbarItems } from "../constants/NavbarItems";

const MobileSidebar = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* drawer */}
      <aside className="absolute left-0 top-0 h-full w-64 bg-[#E7F66C] p-4 flex flex-col">
  <button
    onClick={onClose}
    className="mb-4 text-sm font-semibold"
  >
    ✕ Close
  </button>

  {/* SCROLL CONTAINER */}
  <nav className="flex-1 flex flex-col gap-2 overflow-y-auto no-scrollbar">
    {NavbarItems.map((item) => (
      <button
        key={item}
        className="text-left text-sm font-medium hover:bg-black hover:text-white px-4 py-2 rounded transition-all duration-300 ease-in-out"
      >
        {item}
      </button>
    ))}
  </nav>
</aside>

    </div>
  );
};

export default MobileSidebar;
