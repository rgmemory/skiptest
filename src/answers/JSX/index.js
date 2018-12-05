import { isAttribute } from "postcss-selector-parser";

/*
examples: 

    <div></div>
is transformed to:
    createElement('div', null)

    <div><h1>Heading</h1></div>
is transformed to:
    createElement("div", null, createElement("h1", {}, "Heading"));

    <div>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </div>
is transformed to:
    createElement(
      "div",
      {},
      createElement("h1", null, "Heading"),
      createElement("p", null, "Paragraph")
    );

    <button onClick={fn}>Click Me</button>
is transformed to:
    createElement("button", { onClick: fn }, "Click Me");
*/

export default function createElement(nodeName, attributes, ...children) {
    //This is where I was able to create the DOM node
    let node = document.createElement(`${nodeName}`, null)

    //My thought was to loop through the attributes object to determine what data type was being passed in and then handle it accordingly
    for (let x in attributes){
        //if the value is a number, I set the attribute
        if(typeof attributes[x] === 'number'){
          node.setAttribute(x, attributes[x])
        }
        //if the value is a string, I set the attribute
        else if(typeof attributes[x] === 'string'){
          node.setAttribute(x, attributes[x])
        }
        //if the value is a boolean, I set the attribute, using an empty string as the value
        else if(typeof attributes[x] === 'boolean'){
          node.setAttribute(`${attributes[x]}`, '')
        }
        //if the value is a function, I set the eventListener
        else if(typeof attributes[x] === 'function'){
          node.addEventListener(x, attributes[x])
        }
      }

  return node;
}