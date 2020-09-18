import React, { useState } from 'react';
import postData from '../api/apiCalls'

const ProductForm  = () => {
const [ product_name, setProduct_name ] = useState();
  const [ cutting_type, setCutting_type ] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = cutting_type == 'rooted' ? 3 : 1.5;
    console.log(`product name: ${product_name}`);
    console.log(`cutting_type: ${cutting_type}`);
    console.log(`price: ${price}`);

    const data = { 
      'product_name': product_name,
      'cutting_type': cutting_type,
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
      <label for='product_name-input'>Product Name: </label>
      <input type='text' className="product_name-input" placeholder='Enter plant name here' value={product_name} onChange={(e) => setProduct_name(e.target.value)}></input>
      <br></br>
      <label for='rooted'>cutting type: rooted</label>
      <input type='radio' id='rooted' className='cutting_type-input' name='cutting_type' value='rooted' checked={cutting_type === 'rooted'} onChange={(e) => setCutting_type(e.target.value)}></input>
      <br></br>
      <label for='unrooted'>cutting type: unrooted</label>
      <input type='radio' id='unrooted' className='cutting_type-input' name='cutting_type' value='unrooted' checked={cutting_type === 'unrooted'} onChange={(e) => setCutting_type(e.target.value)}></input>
      <input type='submit'></input>
    </form>
  )
}

export default ProductForm