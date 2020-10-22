import React, { useState, useEffect } from 'react';
import { getData, postData } from '../../api/apiCalls';

const OrderForm = ({ customer }) => {
  
  const [orderItems, setOrderItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState('');
  const [stock, setStock] = useState([]);


  const onTypeSelection = (e) => {
    setProductType(e.target.value);
  };

  return (
    <div>
      <label htmlFor='productType'>Choose the Product Type:</label>
      <select form='orderItemForm' onChange={onTypeSelection}>
        <option value='rooted'>Rooted</option>
        <option value='unrooted'>Unrooted</option>
        <option value='any'>Any Product Type</option>
      </select>
      <form id='orderItemForm'>
        <input type='submit' value='Add Item'/>
      </form>
      <table>
        <thead>
          <tr>
            <th> Product Ordered </th>
            <th> Stock Used </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default OrderForm