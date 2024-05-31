import "./Ordinations.css"
import Navbar from "./Navbar"
import { useSelector } from "react-redux";
import OrdinationsProducts from "./OrdinationsProducts";
import Tables from "./Tables";

export default function Ordinations() {
    document.title=`Ordinazioni`;
    const products= useSelector(state=> state.products.value)
    console.log("products", products);

    // ARRAY DI CATEGORIE PER COSTRURE L"INDICE
    const categories=[]
    products.map((el, i, products)=>{
      if (
        i==0 || 
        products[i].category!= products[i-1].category
      ) {
        categories.push({ name: el.category, URLimage: el.URLimage})
      }
    })

  // FIX
  return (<div className="Ordinations">
    <Tables/>

    <header>
      <h1>Sommario</h1>
      <div className="OrdinationsIndex">{categories.map(el=>{
        return <div key={el.name}>
          <img src={el.URLimage} alt={el.name} height={"100px"}/>
          <p>{ el.name }</p>
        </div>  })}
      </div>
    </header>

    <section>
      <div className="OrdinationsShow"> {products.map((el, i, products)=>{

        return <>
          <h2>
            {i===0 || products[i].category!= products[i-1].category? `${el.category}`:''}
          </h2> 
          <OrdinationsProducts
            URLimage={el.URLimage}
            category={el.category}
            description={el.description}
            name={el.name}
            price={el.price}
          />
        </>

      })}  </div>
    </section>
    <Navbar/>
  </div>)
}
