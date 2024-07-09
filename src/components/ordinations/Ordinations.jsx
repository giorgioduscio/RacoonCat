import "./Ordinations.css"
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import OrdinationsCard from "../ordinations/OrdinationsCard";
import Tables from "../tables/Tables";
import OrdinationsIndex from "../ordinations/OrdinationsIndex";

export default function Ordinations() {
    document.title=`Ordinazioni`;
    const products= useSelector(state=> state.products.value)

    const categories =[]
    products.map((category, i, products)=>{
      i==0 || products[i].category!= products[i-1].category&&
        categories.push({ name: category.category, URLimage: category.URLimage})
    })

  return (
  <div className="Ordinations">
    <Tables/>

    <header>
      <OrdinationsIndex categories={categories}/>
    </header>

    <section>{ categories.map(category=>
      <div className="productCategory" key={category.name}>
        <h2 className="productCategoryTitle">{category.name}</h2>
          
        <div className="flexbox">{products.map(product=>
          product.category ==category.name && 
          <OrdinationsCard
            key={product.name}
            product={{...product}}
          />
        )}</div>
      </div>
    )}</section>

    <Navbar/>
  </div>)
}
