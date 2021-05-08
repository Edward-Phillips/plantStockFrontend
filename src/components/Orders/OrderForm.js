import React, { useState, useEffect } from 'react';
import { getData, postData } from '../../api/apiCalls';
import StockItem from '../Stock/StockItem';
import SpinnerTable from '../Miscellaneous/SpinnerTable';

const OrderForm = ({ customer }) => {
  
  const [orderItems, setOrderItems] = useState([]);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState();
  const [productType, setProductType] = useState('any');
  const [stock, setStock] = useState();
  const [fetchStatus, setFetchStatus] = useState(true);

  const onTypeSelection = (e) => {
    setProductType(e.target.value);
  };

  const onProductSelection = (e) => {
    const selectedProduct = stock.filter(item => {
      return item.product_id === parseInt(e.target.value);
    });
    setProduct(selectedProduct[0]);
  };
  
  const handleAddToOrder = async (e) => {
    e.preventDefault();
    setOrderItems(orderItems => [...orderItems, product]);
    setProduct([]);
  };

  const findOrderTotal = () => {
    let orderTotal = 0;
    orderItems.forEach((item) => {
      const selectedProduct = products.find((element) => {
        return element.id === item.product_id;
      });
      orderTotal += parseInt(selectedProduct.price);
    });
    return orderTotal;
  };

  const handleSaveOrder = async (e) => {
    e.preventDefault();
    const ordersUrl = 'https://plantstock.herokuapp.com/v1/orders';
    const orderTotal = findOrderTotal();
    const date = new Date();
    const data = {
      customer_id : customer.id,
      order_date: date.toString(),
      order_total: orderTotal,
      order_items: orderItems
    }
    postData(ordersUrl, data);
  };

  useEffect(() => {
    const retrieveStockAndProducts = async () => {
      const stockUrl = 'https://plantstock.herokuapp.com/v1/stock';
      const productsUrl = 'https://plantstock.herokuapp.com/v1/products';
      const stockResult = await getData(stockUrl);
      const productsResult = await getData(productsUrl);
      setStock(stockResult.stock);
      setProducts(productsResult.products);
      setFetchStatus(false);
    }
    retrieveStockAndProducts();
  }, [])


  return (
    <div>
      <label htmlFor='productType'>Choose the Product Type: </label>
      <select form='orderItemForm' onChange={onTypeSelection}>
        <option value='any'>Any Product Type</option>
        <option value='rooted'>Rooted</option>
        <option value='unrooted'>Unrooted</option>
      </select>
      <select form='orderItemForm' onChange={onProductSelection}>
          {
            fetchStatus ? <option>please wait while stock loads</option> : stock.map((product) => {
              if (productType === 'any') {
                return <option value={product.product_id}>{product.product_name}</option>
              } else if (product.cutting_type === productType) {
                return <option value={product.product_id}>{product.product_name}</option>
              }
              return null;
            })
            }
      </select>
      <form id='orderItemForm' onSubmit={ handleAddToOrder }>
        <input type='submit' value='Add Item'/>
      </form>
      <SpinnerTable headers={['Product Name', 'Cutting Type', 'Cost Per Cutting','Current Count']} fetchStatus={ false } contents={ orderItems } wrapper={StockItem} />
      <form id='SaveOrder' onSubmit={ handleSaveOrder }>
        <input type='submit' value='Save order'/>
      </form>
    </div>
  )
}

export default OrderForm