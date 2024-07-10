import "./Navbar.css"
import { Link } from "react-router-dom"
import { router } from "../../main"
import { useDispatch, useSelector } from "react-redux"
import { resetSignalman } from "../../datas/cartSlice"

export default function Navbar() {
  // quando premi il pulsante della pagina del carrello, il punto scompare
  const 
    signalman =useSelector(state=>state.cart.value.signalman),
    dispatch =useDispatch()

  return (
  <nav>
    {router.routes.map(el=>{
      if (el.path!='' && el.path!='*')
      return <Link key={el.id} to={el.path}>{ 
        
        el.name=="cart" & signalman? 
        <div style={{position:"relative"}}>
          <div className="act"/> 
          <img 
            src={el.icon} 
            alt={el.name} 
            className={el.name} 
            onClick={()=> dispatch(resetSignalman())}
          />
        </div>
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
