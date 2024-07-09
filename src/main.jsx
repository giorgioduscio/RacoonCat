import React from "react"
import ReactDOM from "react-dom/client"
import "./micro.css"
import "./macro.css"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

// STORE
import {Provider} from "react-redux"
import store from "./datas/store"

// PAGES
import Home from "./components/home/Home"
import Ordinations from "./components/ordinations/Ordinations"
import Cart from "./components/cart/Cart"



export const router= createBrowserRouter([
  { path:'', element:<Navigate to={"/home"}/> },
  {
    name: "home",
    icon: "https://cdn.icon-icons.com/icons2/1660/PNG/512/3844470-home-house_110332.png",
    path: "/home",
    element:<Home/>
  },
  {
    name: "ordinations",
    icon:"https://cdn-icons-png.flaticon.com/256/857/857681.png",
    path: "/ordinations",
    element:<Ordinations/>
  },
  {
    name: "cart",
    icon:"https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160294.png",
    path: "/cart",
    element:<Cart/>
  },
  { path:'*', element:<Navigate to={"/home"}/> },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)