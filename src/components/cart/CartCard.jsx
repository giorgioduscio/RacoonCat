import { useDispatch, useSelector } from "react-redux"
import { removeCart } from "../../datas/cartSlice";
import { formatDate } from "../../tools/formatDate";
import { addCronology } from "../../datas/cronologySlice";

export default function CartCard() {
  let cartTotalPrice =0
  
  // CANCELLA ELEMENTI DEL CARRELLO
  const 
    cart =useSelector(state=> state.cart.value),
    tableSelected =useSelector(state=> state.tables.value.selected),
    dispatch =useDispatch()
    
  // AGGIUNGE IL CARRELLO ALLA CRONOLOGIA
  function toCronology() {
    if (tableSelected!="") {
      let newDate =new Date().toLocaleString(undefined,formatDate)
      dispatch(addCronology({ 
        tableSelected: tableSelected, 
        date: newDate, 
        cart:[...cart.list]
      }))
    }
  }

  return (
  <div className="CartCard">
    <h1>Carrello</h1> 
    {cart.list.length==0? 
    <p className="error">Il carrello è vuoto</p>
    : <>
    <table>
    <tbody>
      { cart.list.map((el, i)=>{
          cartTotalPrice +=el.price* el.amount
          return <tr key={i}>
            <td>
              <button onClick={()=> dispatch(removeCart(i))}>
                <img src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="" />
              </button>
            </td>
            <td>
              <strong>{el.name}</strong>
              <p>Porzioni: {el.amount} </p>
            </td>
            <td className="price">
              {el.price* el.amount}€
            </td>
          </tr>
      })}
        <tr>
          <td> Totale </td>
          <td> : </td>
          <td className="price"> {cartTotalPrice}€ </td>
        </tr>
    </tbody>
    </table>

    <button onClick={toCronology} disabled={tableSelected==''}>
      {tableSelected==''? <p className="error">Seleziona un tavolo</p> :"Ordina"}
    </button>
    </>}
  </div>
  )
}
