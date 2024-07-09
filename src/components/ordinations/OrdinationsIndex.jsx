export default function OrdinationsIndex({categories, productFilter, setProductFilter}) {
  return (
  <div className="OrdinationsIndex">
    <h1>Categorie</h1>

    <div className="indexSlider"> {productFilter ==''?
    categories.map(category=>
      <div key={category.name} onClick={() =>setProductFilter(category.name)}>
        <img src={category.URLimage} alt={category.name} height={"100px"}/>
        <p className="categoryTitle">{ category.name }</p>
      </div>  
    )
    :
      <div style={{margin:"auto"}} onClick={() =>setProductFilter("")}>
          ❌ {productFilter}
      </div>
    }</div>
  </div>
  )
}
