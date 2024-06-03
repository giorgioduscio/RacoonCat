import React from "react"
import { useDispatch } from "react-redux";

export default function CronologyCard({tableSelected, date, cart}) {
  let total=0;
  return (<div className="CronologyCard">
    <h2>{date}</h2>
    <p>Al tavolo {tableSelected}</p>
    
    <table><tbody>
      {cart.map((el, i)=>{
        total+= (el.price* el.amount)
        return <tr key={i}>
          <td>{el.name}, {el.amount} porzioni</td>
          <td>{el.price* el.amount}€</td>
        </tr>
      })}
      <tr>
        <td>Totale</td>
        <td>{total}€</td>
      </tr>
    </tbody></table>
  </div>)
}
