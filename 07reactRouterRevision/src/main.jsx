import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Components";
import { Header } from "./Components";
import { Footer } from "./Components";
import {About} from "./Components";
import {Contact} from "./Components";
import {Github} from "./Components";
import {User} from "./Components";
import githubInfoLoader from './Components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "contact", element: <Contact /> },
//       { path: "github", element: <Github /> },
//       { path: "about", 
//         element: <About /> 
//         // ,children: [
//         //   {
//         //     path: "about/user",
//         //     element: <User/>
//         //   }
//         // ]
//       },
//       { path: "user/:userId",
//         element: <User/>
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="about" element={<About/>} />
      <Route path="user/:userId" element={<User/>} />
      <Route 
        path="github" 
        element={<Github/>} 
        loader={githubInfoLoader}
        />S

    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
