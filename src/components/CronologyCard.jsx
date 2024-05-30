import React from 'react'
import { useDispatch } from 'react-redux';

export default function CronologyCard({date, cart}) {
    
  return (<div className='CronologyCard'>
    <h2>{date}</h2>
    
    <table><tbody>
      {cart.map((el, i)=>{
        return <tr key={i}>
          <td>{el.name}</td>
        </tr>
      })}    
    </tbody></table>
  </div>)
}
