import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-3 px-5 py-4 border-b border-[#334155] bg-[#1e293b]">
      <button aria-label="Menu" className="text-white text-xl">
        <i className="fas fa-bars"></i>
      </button>
      <span className="text-white font-semibold text-sm tracking-wide">
        EURASTROY V 1.0
      </span>
    </div>
  );
};

export default Navbar;
