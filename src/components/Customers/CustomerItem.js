import React from 'react';

const CustomerItem = ({customer}) => {

  return (
    <tr className='customer' key={customer.id}>
          <td className='nameCell' key={customer.id}>{ customer.name }</td>
          <td className='addressCell' key={customer.id}>{ customer.address }</td>
          </tr>
  )
}

export default CustomerItem