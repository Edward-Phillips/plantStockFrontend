import React, { useState, useEffect } from 'react';
import { getData } from '../api/apiCalls'

const ProductPage = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'http://plantstock.herokuapp.net/v1/products';
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
          <tr className='row' key={`row${index}`}>
          <td className='nameCell' key={`nameCell${index}`}>{ product.product_name }</td>
          <td className='cuttingCell' key={`cuttingCell${index}`}>{ product.cutting_type }</td>
          <td className='priceCell' key={`priceCell${index}`}>{ product.price }</td>
          </tr>
        )
      })}
    </tbody>
    </table>
    </>
  )
}

export default ProductPage