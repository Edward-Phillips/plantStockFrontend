import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import CustomerItem from './CustomerItem';

const CustomerPage = () => {
  const [customersArray, setCustomersArray] = useState([]);

  useEffect( () => {
    const retrieveResults = async () => {
      const url = 'https://plantstock.herokuapp.com/v1/customers';
      const result = await (await getData(url));
      setCustomersArray(result.customers);
    }
    retrieveResults();
  },[]);

  return (
    <>
    <h1>Customer Table</h1>
    <table>
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Customer Address</th>
      </tr>
    </thead>
    <tbody>
      {customersArray.map((customer, index) => {
        return (
          <CustomerItem customer={customer} key={index}/>
        )
      })}
    </tbody>
    </table>
    </>
  )
}

export default CustomerPage