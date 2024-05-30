import { remove } from "../datas/cartSlice";
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
  const cart= useSelector(state=> state.cart.value)
  const dispatch= useDispatch()

  function deleteOrdination(i) {
    console.log('event', i);
    dispatch(remove(i))
  }

  return (<div className="cartPage">
    <header>
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
      <button>Ordina</button>
    </header>

    <section>
      <h1>Cronologia</h1>
      
    </section>
    <Navbar/>
</div>)
}
