import React, { useState, useEffect } from 'react';
import { getData } from '../../api/apiCalls';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import StockItem from '../Stock/StockItem';
import CustomerOrder from './CustomerOrder';
import { Button } from 'react-bootstrap';


const CustomerPersonalPage =(props) => {

  const [orders, setOrders] = useState();
  const [suggestedStock, setSuggestedStock] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect( () => {
    const retrieveResults = async () => {
      const orderUrl = `https://plantstock.herokuapp.com/v1/orders/${props.customer.id}`;
      const suggestedStockUrl = orderUrl + '/suggested';
      const orderResults = await getData(orderUrl);
      const suggestedStockResults = await getData(suggestedStockUrl);
      setOrders(orderResults.orders);
      setSuggestedStock(suggestedStockResults.stock);
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
          {
            fetchStatus ? 
              <Spinner animation="border" role="status" className='spinner'><span className="sr-only spinner">Loading...</span></Spinner>
            :
              <Table className='order customer personal' striped bordered size='md'>
                <thead>
                  <tr>
                    <th>Order Date</th>
                    <th>Order Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map((order, index) => {
                      return (
                        <CustomerOrder key={index} order={order}/>
                      )
                    })
                  }
                </tbody>
              </Table>
          }
        </div>
      </section>
      <section>
      <h2>Suggested Stock</h2>
        {
          fetchStatus ?
            <Spinner animation="border" role="status" className='spinner'><span className="sr-only spinner">Loading...</span></Spinner>
          :
            <Table className='suggestedStock customer personal' striped bordered size='md'>
              <thead>
                <th>Product Name</th>
                <th>Cutting Type</th>
                <th>Cost Per Cutting</th>
                <th>Current Count</th>
              </thead>
              <tbody>
                {
                  suggestedStock.map((stock, index) => {
                    return (
                      <StockItem stock={stock} key={index}/>
                    )
                  })
                }
              </tbody>
            </Table>
        }
      </section>
    </div>
  )
}

export default CustomerPersonalPage;