import { useState } from "react"
import { useDispatch } from "react-redux"
import { activeSignalman, addCart } from "../datas/cartSlice"

export default function OrdinationsCard({product}) {
  const {URLimage, category, description, name, price} =product

  // CONTEGGIO DELLE QUANTITA
  const [counter, setCounter]= useState(0)
  function handleClick(e) {
    e.target.innerText=="+"? 
      setCounter(counter +1) 
      :counter!=0&& setCounter(counter -1)
  }

  // MANDA L'ORDINAZIONE AL CARRELLO
  const dispatch =useDispatch()
  function toCart() {
    if (counter>0) {
      dispatch(addCart({ amount: counter, name: name, price: price }))
      setCounter(0)
      dispatch(activeSignalman())
    }
  }

  return (
  <div className="OrdinationsCard">
    <img src={URLimage} alt={name}/>
    <button className="price">{price}€</button>

    <div>
      <div className="info">
          <h3>{name}</h3>
          <p>{description}</p>
      </div>

      <div className="amount">
        <button>{counter}</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>-</button>
        <button onClick={toCart}>
          <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png" alt="" />
        </button>
      </div>
    </div>
  </div>)
}
