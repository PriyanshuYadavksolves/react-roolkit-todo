import React, { useState,useEffect } from 'react';
import './App.css';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from './features/cart/cartSlice';
 

function App() {
  const {items} = useSelector((store)=>store.cart)
  const [showCart,setShowCart] = useState(false)

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchAsync())
  },[dispatch])

  return (
    <div className="App">
      <button onClick={()=>setShowCart(!showCart)}>Cart {items.length}</button>
      {showCart ? <Cart></Cart> : <Products/>}
      
    </div>
  );
}

export default App;
