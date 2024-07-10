import "./Tables.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectTable } from "../../datas/tablesSlice";

export default function Tables() {
  // DROPDOWN
  const 
    [isDrop, setIsDrop] =useState(false),
    dropView ={ display: isDrop? "flex" :"none" },
    rotateIcon ={ transform: isDrop? "rotate(270deg)" :"rotate(180deg)" }

  // LISTA DI TAVOLI
  const 
    tables =useSelector(state=> state.tables.value),
    dispatch =useDispatch()
  function handleClick(id) {
    dispatch(selectTable( id ))
    setIsDrop(false)
  }


  return (
  <div className="Tables"> 
    <div className="view">
      <button onClick={()=> setIsDrop(!isDrop)}>
        <img 
          src="https://i.pinimg.com/originals/08/9b/15/089b153bb357b7e7fd0b3a8d28dc26bd.png" 
          style={rotateIcon}
        />
        {
      tables.selected==""? 
        <div className="error">Seleziona</div>
      :
        <div>{ tables.selected }</div> 
      }</button>
    </div>

    <div className="showTables" style={dropView}>{ 
    tables.list.map(el=>{ 
      return el.available && 
      <p key={el.id} onClick={()=> handleClick(el.id)}> 
        {el.id}
      </p>
    })
    }</div>
  </div>)
}
