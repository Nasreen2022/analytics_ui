import React from 'react';
import Sidebar from '../Sidebar'; 
import Header from '../Header'; 

const TotalSales = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Total Sales</h1>
         
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
