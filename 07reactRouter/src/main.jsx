import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/', // slash top level element che
//     element: <Layout/>,
//     children: [
//         {
//           path:"",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element:<About/>
//         },
//         {
//           path: "contact",
//           element:<Contact/>
//         }
//     ]  // children ni andar furhter value add thay che
//   }
// ]) // method che jeni andar array che

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="user/:userId" element={<User />}></Route>
      <Route path="github" element={<Github />}></Route>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />    
  </StrictMode>,
)
/* componet che je te ak prop ley che */