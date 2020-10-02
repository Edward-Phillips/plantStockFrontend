import React, { useState } from 'react';
import { postData } from '../../api/apiCalls'

const CustomerForm  = () => {
  const [ name, setName ] = useState();
  const [ address, setAddress ] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://plantstock.herokuapp.com/v1/customers'
    const customerData = { 
      'name': name,
      'address': address
    }
    console.log(customerData);
    const result = await postData(url, customerData);
    console.log(result);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name-input'>Customer Name: </label>
      <input type='text' className="name-input" placeholder='Enter Customer name here' value={name} onChange={(e) => setName(e.target.value)}></input>
      <label htmlFor='address-input'>Customer Address:  </label>
      <input type='text' className='address-input' placeholder='WHERE DO THEY LIVE' value={address} onChange={(e) => setAddress(e.target.value)}></input>
      <input type='submit'></input>
    </form>
  )
}

export default CustomerForm