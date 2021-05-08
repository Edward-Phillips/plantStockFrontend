import React from 'react';

const ProductItem = ({content}) => {
  
  return (
    <tr key={content.id}>
    <td className='nameCell' key={content.id}>{ content.product_name }</td>
    <td className='cuttingCell' key={content.id}>{ content.cutting_type }</td>
    <td className='priceCell' key={content.id}>{ content.price }</td>
    </tr>
  )
}

export default ProductItem