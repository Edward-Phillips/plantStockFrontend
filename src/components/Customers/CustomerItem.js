import React from 'react';

const CustomerItem = (props) => {

  const updatePersonalCustomer = (newCustomer) => {
    props.personalCustomerHandler(newCustomer)
  }

  return (
    <tr className='customer' key={props.customer.id} onClick={()=> {updatePersonalCustomer(props.customer)}}>
      <td className='nameCell' key={props.customer.id}>{ props.customer.name }</td>
      <td className='addressCell' key={props.customer.id}>{ props.customer.address }</td>
    </tr>
  )
}

export default CustomerItem