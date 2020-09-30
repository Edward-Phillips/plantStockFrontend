import React from 'react';

const ProductItem = ({product}) => {
  
  return (
    <tr className='row' key={product.id}>
    <td className='nameCell' key={product.id}>{ product.product_name }</td>
    <td className='cuttingCell' key={product.id}>{ product.cutting_type }</td>
    <td className='priceCell' key={product.id}>{ product.price }</td>
    </tr>
  )
}

export default ProductItem