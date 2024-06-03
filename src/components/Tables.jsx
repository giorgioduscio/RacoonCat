import "./Tables.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectTable } from "../datas/tablesSlice";

export default function Tables() {

    // LISTA DI TAVOLI
    const tables =useSelector(state=> state.tables.value)
    const dispatch =useDispatch()

    function handleClick(id) {
      dispatch(selectTable( id ))
    }


  return (<div className="Tables">
    <div className="view">
      <img src="https://cdn-icons-png.flaticon.com/512/3100/3100540.png" alt="" />
      <button>{
      tables.selected==""? 
        <p className="error">Seleziona tavolo</p>
        :
        tables.selected
      }</button>
    </div>

    <div className="showTables">{ 
    tables.list.map(el=>{
      return el.available? 
      <p 
        key={el.id} 
        onClick={()=> handleClick(el.id)}
      > 
        {el.id}
      </p>
      :""
    })
    }</div>
  </div>)
}
