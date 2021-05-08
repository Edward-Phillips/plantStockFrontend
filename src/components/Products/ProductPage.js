import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import ProductItem from './ProductItem';
import SpinnerTable from '../Miscellaneous/SpinnerTable';
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
    <SpinnerTable headers={['Product Name', 'Cutting Type', 'Price']} fetchStatus={ fetchStatus } contents={ productsArray } wrapper={ ProductItem } />
    </>
  )
}

export default ProductPage