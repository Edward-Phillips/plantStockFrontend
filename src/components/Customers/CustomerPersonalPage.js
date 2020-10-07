import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls'


const CustomerPersonalPage =(customer) => {

  const [orders, setOrders] = useState();
  const [suggestedStock, setSuggestedStock] = useState();
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect( () => {
    const retrieveResults = async () => {
      const orderUrl = `https://plantstock.herokuapp.com/v1/orders/${customer.id}`;
      const suggestedStockUrl = orderUrl + '/suggested';
      const orderResults = await getData(orderUrl);
      const suggestedStockResults = await getData(suggestedStockUrl);
      setOrders(orderResults.orders);
      setSuggestedStock(suggestedStockResults.stock);
      setFetchStatus(false);
    }
  });
}

export default CustomerPersonalPage;