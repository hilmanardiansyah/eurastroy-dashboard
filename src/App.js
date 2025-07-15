import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#f5f5f5]">
        <Navbar />
        <MainContent /> {/* ✅ pisah dari App.js */}
      </div>
    </div>
  );
}

export default App;
