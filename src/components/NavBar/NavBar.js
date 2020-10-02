import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import ProductForm from '../Products/ProductForm';
import ProductPage from '../Products/ProductPage';
import StockPage from '../Stock/StockPage';
import StockForm from '../Stock/StockForm';
import CustomerForm from '../Customers//CustomerForm';
import CustomerPage from '../Customers/CustomerPage';
import Home from '../Miscellaneous/Home';
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
          <Nav.Link as={Link} to="/product-entry">
            Add new Product
          </Nav.Link>
          <Nav.Link as={Link} to="/view-products">
            View Products
          </Nav.Link>
          <Nav.Link as={Link} to="/stock-entry">
            Add new Stock
          </Nav.Link>
          <Nav.Link as={Link} to="/view-stock">
            View Stock
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-entry">
            Add new Customer
          </Nav.Link>
          <Nav.Link as={Link} to="/view-customers">
            View Customers
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
    <div>
      <Switch>
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