import "./Cart.css"
import Navbar from "../navbar/Navbar";
import Tables from "../tables/Tables";
import CartCard from "./CartCard"
import Cronology from "./Cronology";

export default function Cart() {
  
  return (
  <article className="Cart">
    <Tables/>

    <CartCard/>
    <Cronology/>
    
    <Navbar/>
  </article>)
}
