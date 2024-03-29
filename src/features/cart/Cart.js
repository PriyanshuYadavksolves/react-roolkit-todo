import { useSelector, useDispatch } from "react-redux";

import "./Cart.css";
import { deleteAsync, updateAsync } from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const {items} = useSelector(store=>store.cart)

  const handleChange = (e,id) =>{
    dispatch(updateAsync({id,change:{quantity:+e.target.value}}))
  }

  return (
    <div>
       {items.map((item) => <div key={item.id} className="cart-item">
        <img
          className="img-fluid"
          src={item.thumbnail}
          alt=""
        />
        <div className="description">
          <p>{item.title}</p>
          <span>{item.brand}</span>
          <strong>${item.price}</strong>
        </div>
        <div className="quantity">
          Quantity
          <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className='close'>
          <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
        </div>
      </div>
        )}
        <h1>Total : {items.reduce((acc,item)=>acc + item.price*item.quantity,0)}</h1>

    </div>
  );
}
