import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">Click Me!</a>
)

const anotherUser = '  Deva';
const react = React.createElement(
  'a', {href: 'https://google.com', target: '_blank'},
  'Click  Visit Google', anotherUser


  
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
    // <reactElement />

  // anotherElement
  react 
)
