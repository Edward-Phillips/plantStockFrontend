import React, { useState } from 'react';
import ProductForm from '../Products/ProductForm';
import ProductPage from '../Products/ProductPage';
import StockPage from '../Stock/StockPage';
import StockForm from '../Stock/StockForm';
import CustomerForm from '../Customers//CustomerForm';
import CustomerPage from '../Customers/CustomerPage';
import Home from '../Miscellaneous/Home';
import './NavBar.css';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const switchComponent = (componentName) => {
    switch (componentName) {
      case 'Home':
        return <Home/>
      case 'ProductForm':
        return <ProductForm/>
      case 'ProductPage':
        return <ProductPage/>
      case 'StockForm':
        return <StockForm/>
      case 'StockPage':
        return <StockPage/>
      case 'CustomerForm':
        return <CustomerForm/>
      case 'CustomerPage':
        return <CustomerPage/>
      default:
        return <Home/>
    }
  }

  return (
    <div>
      <div id='navbar' className='navigation'>
        <button value='Home' onClick={(e) => {setCurrentPage(e.target.value)}}>PlantStock</button>
        <button value='ProductForm' onClick={(e) => {setCurrentPage(e.target.value)}}>Add new Product</button>
        <button value='ProductPage' onClick={(e) => {setCurrentPage(e.target.value)}}>View Products</button>
        <button value='StockForm' onClick={(e) => {setCurrentPage(e.target.value)}}>Add new Stock</button>
        <button value='StockPage' onClick={(e) => {setCurrentPage(e.target.value)}}>View Stock</button>
        <button value='CustomerForm' onClick={(e) => {setCurrentPage(e.target.value)}}>Add new Customer</button>
        <button value='CustomerPage' onClick={(e) => {setCurrentPage(e.target.value)}}>View Customers</button>
      </div>
      <div className="switch">
        {switchComponent(currentPage)}
      </div>
    </div>
  )
}

export default NavBar