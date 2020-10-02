import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import CustomerItem from './CustomerItem';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import './CustomerPage.css';

const CustomerPage = () => {
  const [customersArray, setCustomersArray] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'https://plantstock.herokuapp.com/v1/customers';
      const result = await (await getData(url));
      setCustomersArray(result.customers);
      setFetchStatus(false);
    }
    retrieveResults()
  },[]);

  return (
    <>
    <h1>Customer Table</h1>
    <Table striped bordered size="md">
    <thead>
      <tr className="customer">
        <th>Customer Name</th>
        <th>Customer Address</th>
      </tr>
    </thead>
    <tbody>
      {
        fetchStatus ?
          <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
          :
            customersArray.map((customer, index) => {
              return (
                <CustomerItem customer={customer} key={index}/>
              )
            })
      }
    </tbody>
    </Table>
    </>
  )
}

export default CustomerPage