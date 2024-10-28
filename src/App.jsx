import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TotalSales from './components/pages/TotalSales';
import NewCustomers from './components/pages/NewCustomers';
import ProductsSold from './components/pages/ProductsSold';
import MonthlyRevenue from './components/pages/MonthlyRevenue';
import ActiveUsers from './components/pages/ActiveUsers';
import OrderDetails from './components/pages/OrderDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/total-sales" element={<TotalSales />} />
        <Route path="/new-customers" element={<NewCustomers />} />
        <Route path="/products-sold" element={<ProductsSold />} />
        <Route path="/monthly-revenue" element={<MonthlyRevenue />} />
        <Route path="/active-users" element={<ActiveUsers />} />
        <Route path="/order/:id" element={<OrderDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;
