import "./Navbar.css"
import { Link } from "react-router-dom"
import { router } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { resetSignalman } from "../datas/cartSlice"

export default function Navbar() {
  // quando premi il pulsante della pagina del carrello, il punto scompare
  const 
    signalman =useSelector(s=>s.cart.value.signalman),
    dispatch =useDispatch()
  function handleClick() {
    dispatch(resetSignalman())
  }

  return (
  <nav>
    {router.routes.map(el=>{
      if (el.path!='' && el.path!='*')
      return <Link key={el.id} to={el.path}>{ 
        
        el.name=="cart" & signalman? 
        <>
          <div className="act"/> 
          <img 
            src={el.icon} 
            alt={el.name} 
            className={el.name} 
            onClick={handleClick}
          />
        </>
        :
        <img 
          src={el.icon} 
          alt={el.name} 
          className={el.name}
        />

      }</Link>
    })}
  </nav>)
  
}
