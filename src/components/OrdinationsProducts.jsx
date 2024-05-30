export default function OrdinationsProducts({URLimage, category, description, name, price}) {
  return (<div className="OrdinationsProducts">
    <img src={URLimage} alt={name} width={"200px"}/>
    <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  </div>)
}
