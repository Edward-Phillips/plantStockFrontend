import React, { useState, useEffect } from 'react';
import { getData } from '../api/apiCalls'

const StockPage = () => {
  const [stockArray, setStockArray] = useState([]);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'http://plantstock.herokuapp.net/v1/stock';
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
      </tr>
    </thead>
    <tbody>
      {stockArray.map((stock, index) => {
        return (
          <tr className='row' key={`row${index}`}>
          <td className='nameCell' key={`nameCell${index}`}>{ stock.product_name }</td>
          <td className='cuttingCell' key={`cuttingCell${index}`}>{ stock.cutting_type }</td>
          <td className='priceCell' key={`priceCell${index}`}>{ stock.cost_per_cutting }</td>
          </tr>
        )
      })}
    </tbody>
    </table>
    </>
  )
}

export default StockPage