import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Overview</li>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Reports</li>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Analytics</li>
        <li className="mb-4 cursor-pointer hover:text-gray-300">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
