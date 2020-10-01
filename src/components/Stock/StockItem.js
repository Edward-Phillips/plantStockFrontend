import React from 'react';

const StockItem = ({stock}) => {
  
  return (
    <tr className='row' key={stock.id}>
      <td className='nameCell' key={stock.id}>{ stock.product_name}</td>
      <td className='cuttingCell' key={stock.id}>{ stock.cutting_type}</td>
      <td className='priceCell' key={stock.id}>{ stock.cost_per_cutting}</td>
      <td className='countCell' key={stock.id}>{ stock.current_count}</td>
    </tr>
  )
}

export default StockItem