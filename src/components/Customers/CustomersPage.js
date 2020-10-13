import React, { useState } from 'react';
import CustomerTable from './CustomerTable';
import CustomerPersonalPage from './CustomerPersonalPage';

const CustomerPage = () => {
  const [personalCustomer, setPersonalCustomer] = useState(null);

  const personalCustomerHandler = (currentCustomer) => {
    setPersonalCustomer(currentCustomer);
  }
  
  const displayTableOrPersonal = () => {
    if (personalCustomer) {
      return <CustomerPersonalPage customer={personalCustomer} personalCustomerHandler={personalCustomerHandler}/>
    } else {
      return <CustomerTable personalCustomerHandler={personalCustomerHandler}/>
    }
  }

  return (
    <>
    {displayTableOrPersonal()}
    </>
  )
}

export default CustomerPage
