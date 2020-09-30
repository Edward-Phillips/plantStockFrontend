import React, { useState, useEffect } from 'react';
import { getData } from '../api/apiCalls';
import StockItem from './StockItem';

const StockPage = () => {
  const [stockArray, setStockArray] = useState([]);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'https://plantstock.herokuapp.com/v1/stock';
      const result = await (await getData(url));
      setStockArray(result.stock);
    }
    retrieveResults();
  },[]);

  return (
    <>
    <h1>Stock Table</h1>
    <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Cutting Type</th>
        <th>Cost Per Cutting</th>
        <th>Current Count</th>
      </tr>
    </thead>
    <tbody>
      {stockArray.map((stock, index) => {
        return (
          <StockItem stock={stock} key={index}/>
        )
      })}
    </tbody>
    </table>
    </>
  )
}

export default StockPage