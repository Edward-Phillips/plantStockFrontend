import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import StockItem from '../Stock/StockItem';
import CustomerOrder from './CustomerOrder';
import { Button } from 'react-bootstrap';
import SpinnerTable from '../Miscellaneous/SpinnerTable';


const CustomerPersonalPage =(props) => {

  const [orders, setOrders] = useState();
  const [suggestedStock, setSuggestedStock] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect( () => {
    const retrieveResults = async () => {
      const orderUrl = `https://plantstock.herokuapp.com/v1/orders/${props.customer.id}`;
      const suggestedStockUrl = orderUrl + '/suggested';
      const orderResults = await getData(orderUrl);
      // const suggestedStockResults = await getData(suggestedStockUrl);
      setOrders(orderResults.orders);
      // setSuggestedStock(suggestedStockResults.stock);
      setFetchStatus(false);
    }
    retrieveResults();
  }, []);

  const resetPersonalCustomer = () => {
    props.personalCustomerHandler(null);
  }

  return (
    <div>
      <h1>Customer Details for {props.customer.name}</h1>
      <section>
        <div>
          <div className='name customer'>name: { props.customer.name }</div>
          <div className='address customer'>address: { props.customer.address }</div>
          <Button onClick={()=>{resetPersonalCustomer()}}>Back to Customers</Button>
        </div>
        <div>
        <h2>Order History</h2>
            <SpinnerTable headers={ ['Order Date', 'Order Total'] } fetchStatus={ fetchStatus } contents={ orders } wrapper={ CustomerOrder } />
        </div>
      </section>
      <section>
      <h2>Suggested Stock</h2>
        <SpinnerTable headers={ ['Product Name', 'Cutting Type', 'Cost Per Cutting', 'Current Count'] } fetchStatus={ fetchStatus } contents={ suggestedStock } wrapper={ StockItem } />
      </section>
    </div>
  )
}

export default CustomerPersonalPage;