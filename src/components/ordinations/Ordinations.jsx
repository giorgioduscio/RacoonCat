import "./Ordinations.css"
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import OrdinationsCard from "../ordinations/OrdinationsCard";
import Tables from "../tables/Tables";
import OrdinationsIndex from "../ordinations/OrdinationsIndex";
import { useState } from "react";

export default function Ordinations() {
    document.title=`Ordinazioni`;
    const 
      products= useSelector(state=> state.products.value),
      [productFilter, setProductFilter] =useState("")


      function allCategories() {
        let result =[]
        products.map((category, i, products)=>{
          i==0 || products[i].category !=products[i-1].category&&
            result.push({ name: category.category, URLimage: category.URLimage})
        })  
        if(productFilter ==='') 
          return result
        else
          return result.filter((category)=> category.name==productFilter)
      }
    const categories =allCategories() 

    console.log('products', categories);

  return (
  <article className="Ordinations">
    <section>
      <Tables/>
      <OrdinationsIndex 
        categories={categories} 
        productFilter={productFilter}
        setProductFilter={setProductFilter}
      />

      { categories.map(category=>
      <div className="productCategory" key={category.name}>
        <h2 className="productCategoryTitle">{category.name}</h2>
          
        <div className="flexbox">{products.map(product=>
          product.category ==category.name && 
          <OrdinationsCard
            key={product.name}
            product={{...product}}
          />
        )}</div>
      </div>)}
    </section>

    <Navbar/>
  </article>)
}
