import React from 'react';

const StockItem = ({content}) => {

  console.log(content);
  
  return (
    <tr className='stock' key={content.id}>
      <td className='nameCell' key={content.id}>{ content.product_name}</td>
      <td className='cuttingCell' key={content.id}>{ content.cutting_type}</td>
      <td className='priceCell' key={content.id}>{ content.cost_per_cutting}</td>
      <td className='countCell' key={content.id}>{ content.current_count}</td>
    </tr>
  )
}

export default StockItem