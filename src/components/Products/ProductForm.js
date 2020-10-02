import React, { useState } from 'react';
import { postData } from '../../api/apiCalls'
import './ProductForm.css';

const ProductForm  = () => {
const [ productName, setProductName ] = useState();
  const [ cuttingType, setCuttingType ] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = cuttingType == 'rooted' ? 3 : 1.5;
    console.log(`product name: ${productName}`);
    console.log(`cutting_type: ${cuttingType}`);
    console.log(`price: ${price}`);

    const data = { 
      'product_name': productName,
      'cutting_type': cuttingType,
      'price': price
    }
      const url = 'https://plantstock.herokuapp.com/v1/products'
    const result = await postData(url, data);
    console.log(Object.keys(result.products[0]));
    alert(`product posted:
      name: ${result.products[0].product_name}
      cutting type: ${result.products[0].cutting_type}
      price: ${result.products[0].price}`);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='product_name-input'>Product Name: </label>
      <input type='text' className="product_name-input" placeholder='Enter plant name here' value={productName} onChange={(e) => setProductName(e.target.value)}></input>
      <label htmlFor='rooted'>cutting type: rooted</label>
      <input type='radio' id='rooted' className='cutting_type-input' name='cuttingType' value='rooted' checked={cuttingType === 'rooted'} onChange={(e) => setCuttingType(e.target.value)}></input>
      <label htmlFor='unrooted'>cutting type: unrooted</label>
      <input type='radio' id='unrooted' className='cutting_type-input' name='cuttingType' value='unrooted' checked={cuttingType === 'unrooted'} onChange={(e) => setCuttingType(e.target.value)}></input>
      <input className='productsubmit' type='submit'></input>
    </form>
  )
}

export default ProductForm