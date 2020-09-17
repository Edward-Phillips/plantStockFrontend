import React, { useState } from 'react';


const ProductForm  = () => {
const [ product_name, setProduct_name ] = useState();
  const [ cutting_type, setCutting_type ] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`product name: ${product_name}`);
    console.log(`cutting_type: ${cutting_type}`);
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