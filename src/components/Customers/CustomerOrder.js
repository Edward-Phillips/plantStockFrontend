import React from 'react';

const CustomerOrder = (props) => {
  return (
    <tr key={props.content.id}>
      <td className='dateCell'>{props.content.order_date}</td>
      <td className='amountCell'>{props.content.order_total}</td>
    </tr>
  )
}

export default CustomerOrder;