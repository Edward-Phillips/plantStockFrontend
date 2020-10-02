import React, { useState, useEffect, Suspense } from 'react';
import { getData } from '../../api/apiCalls';
import ProductItem from './ProductItem';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import './ProductPage.css';

const ProductPage = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);


  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'https://plantstock.herokuapp.com/v1/products';
      const result = await (await getData(url));
      setProductsArray(result.products);
      setFetchStatus(false);
    }
    retrieveResults();

  },[]);

  return (
    <>
    <h1>Products</h1>
    {
      fetchStatus ?
        <Spinner animation="border" role="status" className='spinner'><span className="sr-only spinner">Loading...</span></Spinner>
      :
        <Table className='product' striped bordered size="md">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Cutting Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              productsArray.map((product, index) => {
                return (
                  <ProductItem key={index} product={product}/>
                )
              })
            }
          </tbody>
        </Table>
    }
    </>
  )
}

export default ProductPage