import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import ProductForm from '../ProductForm';
import ProductPage from '../ProductPage';
import StockPage from '../StockPage';
import StockForm from '../StockForm';
import CustomerForm from '../Customers/CustomerForm/CustomerForm';
import CustomerPage from '../Customers/CustomerPage/CustomerPage';
import Home from '../Home';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
    <div id="bar">
      <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          PlantStock
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className='navItem' as={Link} to="/product-entry">
            Enter new Product
          </Nav.Link>
          <Nav.Link className='navItem' as={Link} to="/view-products">
            View Products
          </Nav.Link>
          <Nav.Link className='navItem' as={Link} to="/stock-entry">
            Enter new Stock
          </Nav.Link>
          <Nav.Link className='navItem' as={Link} to="/view-stock">
            View Stock
          </Nav.Link>
          <Nav.Link className='navItem' as={Link} to="/customer-entry">
            Add new Customer
          </Nav.Link>
          <Nav.Link className='navItem' as={Link} to="/view-customers">
            View Customers
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
    <div>
      <Switch className='switch'>
        <Route exact path="/" component={Home} />
        <Route path="/product-entry" component={ProductForm} />
        <Route path="/view-products" component={ProductPage} />
        <Route path="/view-stock" component={StockPage} />
        <Route path="/stock-entry" component={StockForm} />
        <Route path="/customer-entry" component={CustomerForm} />
        <Route path="/view-customers" component={CustomerPage} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  </div>
  )
};

export default NavBar