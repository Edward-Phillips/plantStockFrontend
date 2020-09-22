import React, { useState } from 'react';
import { postData } from '../api/apiCalls'

const StockForm  = () => {
  const [ productName, setProductName ] = useState();
  const [ amountPaid, setAmountPaid ] = useState();
  const [ rootedCount, setRootedCount ] = useState();
  const [ unrootedCount, setUnrootedCount ] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalCuttings = rootedCount + unrootedCount;
    const costPerCutting = amountPaid / totalCuttings;
    const url = 'https://plantstock.herokuapp.com/v1/stock'
    if ( rootedCount > 0) {
      const rootedData = { 
        'product_name': productName,
        'cutting_type': 'rooted',
        'cost_per_cutting': costPerCutting,
        'current_count': rootedCount
      }
      console.log(rootedData);
      const result = await postData(url, rootedData);
    }
    if ( unrootedCount > 0) {
      const unrootedData = { 
        'product_name': productName,
        'cutting_type': 'unrooted',
        'cost_per_cutting': costPerCutting,
        'current_count': unrootedCount
      }
      console.log(unrootedData);
      const result = await postData(url, unrootedData);
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label for='product_name-input'>Product Name: </label>
      <input type='text' className="product_name-input" placeholder='Enter plant name here' value={productName} onChange={(e) => setProductName(e.target.value)}></input>
      <br></br>
      <label for='amountPaid-input'>Total Paid:</label>
      <input type='number' className='amountPaid-input' placeholder='price' value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)}></input>
      <br></br>
      <label for='rootedCount-input'>Number of Rooted Cuttings:</label>
      <input type='number' className='rootedCount-input' placeholder='# rooted' value={rootedCount} onChange={(e) => setRootedCount(e.target.value)}></input>
      <br></br>
      <label for='unrootedCount-input'>Number of Unrooted Cuttings:</label>
      <input type='number' className='unrootedCount-input' placeholder='# unrooted' value={unrootedCount} onChange={(e) => setUnrootedCount(e.target.value)}></input>
      <br></br>
      <input type='submit'></input>
    </form>
  )
}

export default StockForm