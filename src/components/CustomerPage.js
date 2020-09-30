import React, { useState, useEffect } from 'react';
import { getData } from '../api/apiCalls'

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
          <tr className='row' key={`row${index}`}>
          <td className='nameCell' key={`nameCell${index}`}>{ customer.name }</td>
          <td className='addressCell' key={`addressCell${index}`}>{ customer.address }</td>
          </tr>
        )
      })}
    </tbody>
    </table>
    </>
  )
}

export default CustomerPage