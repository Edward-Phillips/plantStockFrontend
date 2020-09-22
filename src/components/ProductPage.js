import React, { useState, useEffect } from 'react';
import { getData } from '../api/apiCalls'

const ProductPage = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'http://localhost:3000/v1/products';
      const result = await (await getData(url));
      console.log(Object.keys(result));
      setProductsArray(result.products);
      console.log(result.products);
      console.log(productsArray);
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