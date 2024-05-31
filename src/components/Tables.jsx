import { useState } from "react";
import "./Tables.css"
import { useSelector } from "react-redux"

export default function Tables() {

    // TAVOLO SELEZIONATO
    const [tableSelected, setTableSelected]= useState("Seleziona tavolo")
    // LISTA DI TAVOLI
    const tables= useSelector(state=> state.tables.value)

  return (<div className="Tables">
    <button>{tableSelected}</button>
    <div>
        {tables.map(el=>{
            return <p 
              key={el.id} 
              onClick={()=> setTableSelected("Tavolo: "+el.id)}>
              {el.id}
            </p>
        })}
    </div>
  </div>)
}
