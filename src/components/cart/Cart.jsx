import "./Cart.css"

import CronologyCard from "./CronologyCard";
import Navbar from "../navbar/Navbar";
import Tables from "../tables/Tables";
import CartCard from "./CartCard"
import { useSelector } from "react-redux";


/*
export const ThemeContext =createContext(null)
const theme =useContext(ThemeContext);
console.log("theme", theme);
<ThemeContext.Provider value="dark">
</ThemeContext.Provider>
*/

export default function Cart() {
  const cronology =useSelector(state=> state.cronology.value)

  
  return (
  <div className="Cart">
    <Tables/>

    <header>
      <CartCard/>
    </header>

    <section>
      <h1>Cronologia</h1>
      <div className="cronology"> { cronology.length==0? 
        <p className="error">Non hai ancora effettuato alcun ordine</p>

      : cronology.map((el, i)=>
         <CronologyCard
          key={i}
          tableSelected={el.tableSelected}
          date={el.date}
          cart={el.cart}
        />

      )}</div>
    </section>
    
    <Navbar/>
  </div>)
}
