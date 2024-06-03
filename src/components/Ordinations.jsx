import "./Ordinations.css"
import Navbar from "./Navbar"
import { useSelector } from "react-redux";
import OrdinationsCard from "./OrdinationsCard";
import Tables from "./Tables";
import { Link } from "react-router-dom";

export default function Ordinations() {
    document.title=`Ordinazioni`;
    const products= useSelector(state=> state.products.value)

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

  return (
  <div className="Ordinations">
    <Tables/>

    <header>
      <h1>Sommario</h1>
      <div className="OrdinationsIndex">
        {categories.map(el=>{
          return <Link key={el.name} to={`#${el.name}`}> {/* fix */}
            <img src={el.URLimage} alt={el.name} height={"100px"}/>
            <p>{ el.name }</p>
          </Link>  })
        }
      </div>
    </header>

    <section>
      { products.map((el, i, products)=>{

        return <>
          { i===0 || products[i].category!= products[i-1].category? 
            <h2 id={el.category}>{el.category}</h2>
          :
            ''
          }
         
        <div className="OrdinationsShow">
          <OrdinationsCard
            URLimage={el.URLimage}
            category={el.category}
            description={el.description}
            name={el.name}
            price={el.price}
          />
        </div>
        </>

      })
      }
    </section>
    <Navbar/>
  </div>)
}
