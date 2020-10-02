import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import StockItem from './StockItem';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
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
    <Table striped bordered size="sm">
    <thead>
      <tr className="stock">
        <th>Product Name</th>
        <th>Cutting Type</th>
        <th>Cost Per Cutting</th>
        <th>Current Count</th>
      </tr>
    </thead>
    <tbody>
      {
        fetchStatus ?
          <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
        :
          stockArray.map((stock, index) => {
            return (
              <StockItem stock={stock} key={index}/>
            )
          })
      }
    </tbody>
    </Table>
    </>
  )
}

export default StockPage