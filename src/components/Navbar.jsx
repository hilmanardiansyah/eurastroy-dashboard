import React from "react";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center border-b border-[#d9d9d9] bg-white px-4 md:px-6 h-14 justify-between">
      {/* Kiri: Hamburger, Logo dan Teks */}
      <div className="flex items-center gap-2">
        {/* Hamburger hanya di mobile */}
        <button
          className="text-xl text-[#1e293b] md:hidden"
          onClick={onToggleSidebar}
        >
          <i className="fas fa-bars"></i>
        </button>

        <img
          src="https://storage.googleapis.com/a1aa/image/2ae6cf41-c16e-4ca4-430e-68ddeb568fb4.jpg"
          alt="Mitra Bali"
          className="w-8 h-8"
        />
        <div className="hidden sm:block font-semibold text-sm md:text-lg text-[#1a1a1a] whitespace-nowrap">
          MITRA{" "}
          <span className="text-[#4a4a4a] font-normal">BALI INTERNATIONAL</span>
        </div>
      </div>

      {/* Tengah: Search Bar (disembunyikan di mobile) */}
      <form className="hidden md:flex items-center max-w-md w-full relative mx-6">
        <input
          type="search"
          placeholder="Поиск по разделу ..."
          className="w-full rounded border border-[#d9d9d9] bg-[#f5f5f5] text-xs text-[#a0a6b0] placeholder-[#a0a6b0] py-2 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-[#2a59ff]"
        />
        <i className="fas fa-search absolute right-3 text-[#a0a6b0] text-xs"></i>
      </form>

      {/* Kanan: Action Buttons */}
      <div className="flex items-center gap-3 text-xs text-[#4a4a4a]">
        <button className="bg-white border border-[#d9d9d9] rounded px-2 md:px-3 py-1 hidden sm:block">
          RU
        </button>
        <button className="hover:text-[#2a59ff]">
          <i className="fas fa-th-large"></i>
        </button>
        <button className="hover:text-[#2a59ff]">
          <i className="fas fa-bell"></i>
        </button>
        <button className="hover:text-[#2a59ff] hidden sm:inline">
          <i className="far fa-bell"></i>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#c4c4c4] hidden sm:block"></div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="font-semibold text-[#4a4a4a]">Alex Sanbaev</span>
          <span className="text-[10px] text-[#a0a6b0]">Finance strategy</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
