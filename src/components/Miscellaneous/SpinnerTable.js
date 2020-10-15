import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import CustomerOrder from '../Customers/CustomerOrder';

const SpinnerTable = (props) => {


  return (
    <>
      {props.fetchStatus ?
        <Spinner animation="border" role="status" className='spinner'><span className="sr-only spinner">Loading...</span></Spinner>
      :
      <Table className='order customer personal' striped bordered size='md'>
                <thead>
                  <tr>
                    {
                      props.headers.map((header, index) => {
                        return (
                          <th>{ header }</th>
                        )
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    props.contents.map((order, index) => {
                      return (
                        <CustomerOrder key={index} order={order}/>
                      )
                    })
                  }
                </tbody>
              </Table>
      }
    </>
  )
}

export default SpinnerTable;