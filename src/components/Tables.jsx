import "./Tables.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectTable } from "../datas/tablesSlice";

export default function Tables() {

    // LISTA DI TAVOLI
    const tables =useSelector(state=> state.tables.value)
    const dispatch =useDispatch()

    function click(id) {
      dispatch(selectTable( id ))
    }

  return (<div className="Tables">
    <button>{tables.selected==""? "Seleziona tavolo" :tables.selected}</button>
    <div>
      { tables.list.map(el=>{
        return el.available? <p 
          key={el.id} 
          onClick={()=> click(el.id)}
          > {el.id}
        </p>
        :""
      })}
    </div>
  </div>)
}
