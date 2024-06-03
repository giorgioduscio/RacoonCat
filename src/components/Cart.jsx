import "./Cart.css"

import { remove } from "../datas/cartSlice";
import { add } from "../datas/cronologySlice";
import CronologyCard from "./CronologyCard";
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux"
import Tables from "./Tables";

// FORMATO DATA ODIERNA
const formatDate={ // mercoledi 19/12/2022
  //DATA
  weekday:"short", //mer||mercoledi
  day:"2-digit", 
  month:"2-digit",
  year:"numeric", 
  
  //ORARIO
  hour:"2-digit",
  minute:"2-digit",
  second:"2-digit",
  hour12:false, // analogico||digitale
}


export default function Cart() {
  // CANCELLA ELEMENTI DEL CARRELLO
  const cart =useSelector(state=> state.cart.value)
  const tableSelected =useSelector(state=> state.tables.value.selected)
  const dispatch =useDispatch()
  function deleteOrdination(i) {
    dispatch(remove(i))
  }
  
  // AGGIUNGE IL CARRELLO ALLA CRONOLOGIA
  const cronology =useSelector(state=> state.cronology.value)
  function toCronology() {
    if (tableSelected!="") {
      let newDate =new Date().toLocaleString(undefined,formatDate)
      dispatch(add({ 
        tableSelected: tableSelected, 
        date: newDate, 
        cart:[...cart.list]
      }))
    }
  }


  let total=0
  return (<div className="Cart">
    <Tables/>

    <header>
      <div className="CartCard">
        <h1>Carrello{cart.list.length==0? " vuoto": ""}</h1> 

        { cart.list.length==0? "": <>
          <table>
          <tbody>
            {
              cart.list.map((el, i)=>{
                total+= el.price* el.amount
                return <tr key={i}>
                    <td>{el.name}, {el.amount} porzioni</td>
                    <td>{el.price* el.amount}€</td>
                    <td><button onClick={()=> deleteOrdination(i)}>❌</button></td>
                  </tr>
              })
            }
              <tr><td> Totale </td><td> {total}€ </td></tr>
          </tbody>
          </table>
          <button onClick={toCronology}>Ordina</button>
        </>}

      </div>
    </header>

    <section>
      <h1>Cronologia</h1>
      <div>
        { cronology.length==0? 
          <p>Non hai ancora effettuato alcun ordine</p>
          :
          cronology.map((el, i)=>{
            return <CronologyCard
              key={i}
              tableSelected={el.tableSelected}
              date={el.date}
              cart={el.cart}
            />
          })
        }
      </div>
    </section>
    <Navbar/>
</div>)
}
