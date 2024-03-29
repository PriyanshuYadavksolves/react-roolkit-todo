import { useSelector, useDispatch } from "react-redux";

import "./Products.css";
import { fetchAsync } from "./productsSlice";
import { addAsync } from "../cart/cartSlice";
import { useEffect } from "react";

export function Products() {
  const dispatch = useDispatch();
  const {products} = useSelector(store=>store.product)


  useEffect(()=>{
    dispatch(fetchAsync())
  },[dispatch])

  return (
    <div>
      <div>

        {products.map((p)=>(
          <div key={p.id} className="card">
          <img src={p.thumbnail} alt={p.title} style={{width:'100%'}} />
          <h1>{p.title}</h1>
          <p className="price">${p.price}</p>
          <p>{p.description}</p>
          <p>
            <button onClick={()=>dispatch(addAsync(p))}>Add to Cart</button>
          </p>
        </div>
        ))}
        
      </div>
    </div>
  );
}
