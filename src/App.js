import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Filter from "./Filter";
import Table from "./Table";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-[#f3f5f7]">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        <Header />
        <div className="p-6 space-y-6">
          <Filter />

          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
