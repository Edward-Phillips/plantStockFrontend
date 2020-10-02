import React, { useState } from 'react';
import NavBar from 'react-bootstrap/NavBar';
import ProductForm from '../Products/ProductForm';
import ProductPage from '../Products/ProductPage';
import StockPage from '../Stock/StockPage';
import StockForm from '../Stock/StockForm';
import CustomerForm from '../Customers/CustomerForm';
import CustomerPage from '../Customers/CustomerPage';
import Home from '../Miscellaneous/Home';
import './NavBar.css';
import Button from 'react-bootstrap/Button';

const AltNavBar = () => {
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
      <NavBar id='navbar' className='navigation'>
        <Button value='Home' onClick={(e) => {setCurrentPage(e.target.value)}}>PlantStock</Button>
        <Button value='ProductForm' onClick={(e) => {setCurrentPage(e.target.value)}}>Add new Product</Button>
        <Button value='ProductPage' onClick={(e) => {setCurrentPage(e.target.value)}}>View Products</Button>
        <Button value='StockForm' onClick={(e) => {setCurrentPage(e.target.value)}}>Add new Stock</Button>
        <Button value='StockPage' onClick={(e) => {setCurrentPage(e.target.value)}}>View Stock</Button>
        <Button value='CustomerForm' onClick={(e) => {setCurrentPage(e.target.value)}}>Add new Customer</Button>
        <Button value='CustomerPage' onClick={(e) => {setCurrentPage(e.target.value)}}>View Customers</Button>
      </NavBar>
      <div className="switch">
        {switchComponent(currentPage)}
      </div>
    </div>
  )
}

export default AltNavBar