import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Login from './pages/Login.jsx'
import Features from "./pages/Features";
import Pricing from './pages/Pricing.jsx'
import SignUp from './pages/SignUp.jSX'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {path:"",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"contactus",element:<ContactUs/>},
      {path:"login",element:<Login/>},
      { path: "/features", element: <Features /> },
      {path:"/pricing",element:<Pricing/>},
      {path:"/Signup",element:<SignUp/>}
      

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
