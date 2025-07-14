import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-xl font-bold">Main Content</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
