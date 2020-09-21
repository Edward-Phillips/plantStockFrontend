import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductPage from './ProductPage';
import Home from './Home';

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
            Enter new Product
          </Nav.Link>
          <Nav.Link as={Link} to="/view-products">
            View Products
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product-entry" component={ProductForm} />
        <Route path="/view-products" component={ProductPage} />
      </Switch>
    </div>
  </div>
  )
};

export default NavBar