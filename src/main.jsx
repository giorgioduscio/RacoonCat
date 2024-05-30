import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// STORE
import {Provider} from "react-redux"
import store from './datas/store'

// PAGES
import Home from './components/Home'
import Ordinations from './components/Ordinations'
import Cart from './components/Cart'



export const router= createBrowserRouter([
  {
    name: "home",
    path: `/home`,
    element:<Home/>
  },
  {
    name: "ordinations",
    path: "/ordinations",
    element:<Ordinations/>
  },
  {
    name: "cart",
    path: "/cart",
    element:<Cart/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)