import React, { useEffect } from 'react';

const CustomerOrder = (props) => {
  return (
    <tr key={props.order.id}>
      <td className='dateCell'>{props.order.order_date}</td>
      <td className='amountCell'>{props.order.order_total}</td>
    </tr>
  )
}

export default CustomerOrder;