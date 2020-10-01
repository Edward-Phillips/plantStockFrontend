import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import ProductItem from './ProductItem';
import Spinner from 'react-bootstrap/Spinner';

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
    <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Cutting Type</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        fetchStatus ?
          <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
        :
          productsArray.map((product, index) => {
            return (
              <ProductItem key={index} product={product}/>
            )
          })
      }
    </tbody>
    </table>
    </>
  )
}

export default ProductPage