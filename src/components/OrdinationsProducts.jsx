import { useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../datas/cartSlice"

export default function OrdinationsProducts({URLimage, category, description, name, price}) {

  let background={ 
    backgroundImage: `url(${URLimage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  
  // CONTEGGIO DELLE QUANTITA
  const [counter, setCounter]= useState(0)
  function handleClick(e) {
    if (e.target.innerText=="+") {
      setCounter(counter+ 1)
    } else {
      if (counter!=0){
        setCounter(counter- 1)
      }
    }
  }

  // MANDA L'ORDINAZIONE AL CARRELLO
  const dispatch= useDispatch()
  function toCart() {
    if (counter>0) {
      dispatch(add({ amount: counter, name: name, price: price }))
      setCounter(0)
    }
  }

  return (<div className="OrdinationsProducts" style={background}>
    {/* <img src={URLimage} alt={name} width={"200px"}/> */}
    <div className="info">
        <h3>{name} {price}€</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p></p>
    </div>
    <div className="amount">
      <button>{counter}</button>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>-</button>
      <button onClick={toCart}>
        <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png" alt="" />
      </button>
    </div>
  </div>)
}
