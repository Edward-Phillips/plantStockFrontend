import React from 'react';

const CustomerOrder = (order) => {
  return (
    <tr key={order.id}>
      <td className='dateCell'>{order.order_date}</td>
      <td className='amountCell'>{order.order_total}</td>
    </tr>
  )
}

export default CustomerOrder;