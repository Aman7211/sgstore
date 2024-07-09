import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Admin from './pages/Admin';
import Bill from './pages/Bill';
import Login from './pages/Login';
import CustomerHome from './pages/CustomerHome';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-4">
       <Routes>
        {token ? (
        <Route path='/' element={<Home/>}/>
      ):( <Route path='/' element={<CustomerHome/>} />)}
        <Route path='/product' element={<Product/>}/>
        <Route path='/employee' element={<Services/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/bill' element={<Bill/>}/>
        <Route path='/login' element={<Login/>}/>
       
      
        {/* <Route path='/contact' element={<Contact/>}/> */}

       </Routes>
      </div>
    </div>
  );
}

export default App;
