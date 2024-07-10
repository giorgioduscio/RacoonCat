import React from 'react'
import { useSelector } from 'react-redux'
import CronologyCard from './CronologyCard';

export default function Cronology() {
    const cronology =useSelector(state=> state.cronology.value)

  return (
    <div className="Cronology">
      <h1>Cronologia</h1>
      <div className="cronology"> { cronology.length==0
      ? <p className="error">Non hai ancora effettuato alcun ordine</p>
      : cronology.map((el, i)=>
         <CronologyCard
          key={i}
          tableSelected={el.tableSelected}
          date={el.date}
          cart={el.cart}
        />
      )}</div>
    </div>
  )
}
