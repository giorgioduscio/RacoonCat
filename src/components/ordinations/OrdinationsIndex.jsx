import React from 'react'
import { Link } from 'react-router-dom'

export default function OrdinationsIndex({categories}) {
  return (<div className="OrdinationsIndex">
    <h1>Sommario</h1>
    <div className="indexSlider">{categories.map(category=>
      <Link key={category.name} to={`#${category.name}`}> {/* fix */}
        <img src={category.URLimage} alt={category.name} height={"100px"}/>
        <p className="categoryTitle">{ category.name }</p>
      </Link>  
    )}</div>
  </div>)
}
