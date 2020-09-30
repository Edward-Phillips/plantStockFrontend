import React, { useState, useEffect } from 'react';
import { getData } from '../api/apiCalls';
import ProductItem from './ProductItem';

const ProductPage = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'https://plantstock.herokuapp.com/v1/products';
      const result = await (await getData(url));
      setProductsArray(result.products);
    }
    retrieveResults();

  },[]);

  return (
    <>
    <h1>Products Table</h1>
    <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Cutting Type</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {productsArray.map((product, index) => {
        return (
          <ProductItem key={index} product={product}/>
        )
      })}
    </tbody>
    </table>
    </>
  )
}

export default ProductPage