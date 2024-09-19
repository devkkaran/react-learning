function customRender(reactElement, mainContainer) {
  // const domElement = document.createElement(reactElement.type);

  // domElement.innerHTML = reactElement.children;

  // domElement.setAttribute("href", reactElement.props.href);

  // domElement.setAttribute("target", reactElement.props.target);

  // mainContainer.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");
const value = document.querySelector("#value");

customRender(reactElement, mainContainer);

let counter = 15;
function addValue(){
   counter += 1;
   console.log(counter);
   
   value.innerHTML = `<h2> ${counter} </h2>`
}
