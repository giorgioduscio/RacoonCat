import React from "react"
import { useDispatch } from "react-redux";

export default function CronologyCard({tableSelected, date, cart}) {
  let total=0;
  return (
  <div className="CronologyCard">
    <h3 className="date">{date}</h3>
    <h4 className="tableSelected">Al tavolo {tableSelected}</h4>
    
    <table>
    <tbody>
      {cart.map((el, i)=>{
        total+= (el.price* el.amount)
        return <tr key={i}>
          <td>{el.name}, {el.amount} porzioni</td>
          <td className="price">{el.price* el.amount}€</td>
        </tr>
      })}

      <tr>
        <td>Totale</td>
        <td className="price">{total}€</td>
      </tr>
    </tbody>
    </table>

  </div>)
}
