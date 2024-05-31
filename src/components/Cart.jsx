import "./Cart.css"

import { remove } from "../datas/cartSlice";
import { add } from "../datas/cronologySlice";
import CronologyCard from "./CronologyCard";
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux"
import Tables from "./Tables";

export default function Cart() {

  // CANCELLA ELEMENTI DEL CARRELLO
  const cart= useSelector(state=> state.cart.value)
  const dispatch= useDispatch()
  function deleteOrdination(i) {
    dispatch(remove(i))
  }
  
  // AGGIUNGE IL CARRELLO ALLA CRONOLOGIA
  const cronology= useSelector(state=> state.cronology.value)
  function toCronology() {
    let newDate= "--/--/--";
    dispatch(add({ date: newDate, cart:[...cart]}))
  }


  let total=0
  return (<div className="cartPage">
    <Tables/>

    <header>
      <div className="CartCard">
        <h1>Carrello</h1>
        <table><tbody>
            {cart.map((el, i)=>{
              total+= el.price* el.amount
              return <tr key={i}>
                  <td>{el.name}, {el.amount} porzioni</td>
                  <td>{el.price* el.amount}€</td>
                  <td><button onClick={()=> deleteOrdination(i)}>❌</button></td>
                </tr>
            })}
            <tr>
              <td>Totale</td>
              <td>{total}€</td>
            </tr>
        </tbody></table>
        <button onClick={toCronology}>Ordina</button>
      </div>
    </header>

    <section>
      <h1>Cronologia</h1>
      {cronology.map((el, i)=>{
        return <CronologyCard
          key={i}
          date={el.date}
          cart={el.cart}
        />
      })}
    </section>
    <Navbar/>
</div>)
}
