import React from "react"
import { Link } from "react-router-dom"
import { router } from "../main"

export default function Navbar() {
  // console.log("router", router.routes);

  return (<nav>
    {router.routes.map(el=>{
      return <Link key={el.id} to={el.path}> 
        <img src={el.icon} alt={el.name}/>
      </Link>
    })}
  </nav>)
}
