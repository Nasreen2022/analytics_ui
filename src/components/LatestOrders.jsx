import React from 'react';

const LatestOrders = () => {
  const orders = [
    { id: 1, customer: 'John Doe', product: 'Rezin', amount: '₹65,000', date: '2024-10-20' },
    { id: 2, customer: 'Jane Smith', product: 'Bronze', amount: '₹25,000', date: '2024-10-21' },
    { id: 3, customer: 'Mark Johnson', product: 'Digital Painting', amount: '₹2,500', date: '2024-10-22' },
    { id: 4, customer: 'Emily Davis', product: 'Wall Hanging', amount: '₹15,000', date: '2024-10-23' },
    { id: 5, customer: 'Michael Brown', product: 'Wooden', amount: '₹1,200', date: '2024-10-24' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Latest Orders</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left border-b border-gray-300">Order ID</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Customer</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Product</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Amount</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map(order => (
            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">{order.customer}</td>
              <td className="py-3 px-6">{order.product}</td>
              <td className="py-3 px-6 font-medium text-gray-800">{order.amount}</td>
              <td className="py-3 px-6">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrders;
