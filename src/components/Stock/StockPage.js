import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import StockItem from './StockItem';
import SpinnerTable from '../Miscellaneous/SpinnerTable'
import './StockPage.css';

const StockPage = () => {
  const [stockArray, setStockArray] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'https://plantstock.herokuapp.com/v1/stock';
      const result = await (await getData(url));
      setStockArray(result.stock);
      setFetchStatus(false);
    }
    retrieveResults();
  },[]);

  return (
    <>
    <h1>Current Stock</h1>
    <SpinnerTable headers={['Product Name', 'Cutting Type', 'Cost Per Cutting','Current Count']} fetchStatus={ fetchStatus } contents={ stockArray } wrapper={StockItem} />
    </>
  )
}

export default StockPage