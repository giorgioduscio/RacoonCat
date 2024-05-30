import { remove } from "../datas/cartSlice";
import { add } from "../datas/cronologySlice";
import CronologyCard from "./CronologyCard";
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux"

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



  return (<div className="cartPage">
    <header>
      <div className="CartCard">
        <h1>Carrello</h1>
        <table>
          <tbody className="Cart">
            {cart.map((el, i)=>{
              return <tr key={i}>
                  <td><button onClick={()=> deleteOrdination(i)}>❌</button></td>
                  <td>{el.amount} {el.name}</td>
                  <td>{el.price* el.amount}€</td>
                </tr>
            })}
          </tbody>
        </table>
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
