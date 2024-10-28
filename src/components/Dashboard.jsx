import React from 'react';
import { FaChartLine, FaUsers, FaProductHunt, FaDollarSign, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import LineChartComponent from './Charts/LineChartComponent';
import BarChartComponent from './Charts/BarChartComponent';
import PieChartComponent from './Charts/PieChartComponent';
import LatestOrders from './LatestOrders';

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ml-64">
        <Header />

        <div className="p-6 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link to="/total-sales" className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start hover:shadow-xl transition-shadow duration-200">
              <FaChartLine className="text-blue-500 text-3xl mb-2" />
              <h3 className="text-sm font-semibold">Total Sales</h3>
              <p className="text-lg font-bold mt-1 text-gray-600">₹120,000</p>
              <p className="text-xs text-gray-400 mt-1">+12% from last month</p>
            </Link>

            <Link to="/new-customers" className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start hover:shadow-xl transition-shadow duration-200">
              <FaUsers className="text-green-500 text-3xl mb-2" />
              <h3 className="text-sm font-semibold">New Customers</h3>
              <p className="text-lg font-bold mt-1 text-gray-600">350</p>
              <p className="text-xs text-gray-400 mt-1">+8% from last month</p>
            </Link>


            <Link to="/products-sold" className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start hover:shadow-xl transition-shadow duration-200">
              <FaProductHunt className="text-purple-500 text-3xl mb-2" />
              <h3 className="text-sm font-semibold">Products Sold</h3>
              <p className="text-lg font-bold mt-1 text-gray-600">850</p>
              <p className="text-xs text-gray-400 mt-1">+5% from last month</p>
            </Link>


            <Link to="/monthly-revenue" className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start hover:shadow-xl transition-shadow duration-200">
              <FaDollarSign className="text-yellow-500 text-3xl mb-2" />
              <h3 className="text-sm font-semibold">Monthly Revenue</h3>
              <p className="text-lg font-bold mt-1 text-gray-600">₹45,000</p>
              <p className="text-xs text-gray-400 mt-1">+15% from last month</p>
            </Link>


            <Link to="/active-users" className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start hover:shadow-xl transition-shadow duration-200">
              <FaUserCheck className="text-indigo-500 text-3xl mb-2" />
              <h3 className="text-sm font-semibold">Active Users</h3>
              <p className="text-lg font-bold mt-1 text-gray-600">1,200</p>
              <p className="text-xs text-gray-400 mt-1">+10% from last month</p>
            </Link>
          </div>


          <div className="flex gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 w-1/2">
              <h2 className="text-xl font-semibold mb-2 text-center">Monthly Sales</h2>
              <BarChartComponent data={sampleData} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 w-1/2">
              <h2 className="text-xl font-semibold mb-2 text-center">Sales Distribution</h2>
              <PieChartComponent data={sampleData} />
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Sales Overview</h2>
            <LineChartComponent data={sampleData} />
          </div>

          <LatestOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
