/** @jsx cleanCreateElement */

/*
Don't edit this file. It is here in
case you would like to reference it.
*/

export default function(createElement) {
  const cleanCreateElement = (
    tag,
    { __source, __self, ...attrs },
    ...children
  ) => {
    
    return createElement(tag, attrs, ...children);
  };

  const tests = {
    "Creates real HTML elements, not strings.": () => {
      return <div>Test</div> instanceof HTMLDivElement;
    },
    "Creates elements of different tag names": () => {
      return <span>Test</span> instanceof HTMLSpanElement;
    },
    "Creates elements with attributes": () => {
      return (
        (<div class="something">Test</div>).outerHTML ===//////added parentheses
        '<div class="something">Test</div>'
      );
    },
    "Creates elements with text nodes": () => {
      return ((<div>Test</div>).outerHTML === "<div>Test</div>"); ////added 2 sets of parenthses
    },
    "Creates elements with multiple children": () => {
      return (
        (
          <div>
            <div>First Child</div>
            <div>Second Child</div>
          </div>
        ).outerHTML ===
        `<div><div>First Child</div><div>Second Child</div></div>`
      );
    },
    "Creates elements using map": () => {
      const children = ["first item", "second item"];
      return (
        (
          <ul>
            {children.map(childText => (
              <li>{childText}</li>
            ))}
          </ul>
        ).outerHTML === `<ul><li>first item</li><li>second item</li></ul>`
      );
    },
    "Creates elements with click handlers children": () => {
      let clicked = false;
      const el = <button onClick={() => (clicked = true)}>click</button>;
      el.click();
      return clicked && el.outerHTML === `<button>click</button>`;
    },
    "Creates components from a function": () => {
      const Component = ({ class: className, children }) => (
        <div class={className}>{children}</div>
      );

      const el = <Component class="something">div</Component>;
      return el.outerHTML === `<div class="something">div</div>`;
    }
  };

  console.groupCollapsed(`JSX Renderer Tests`);
  
  const results = Object.entries(tests).map(([label, fn]) => {
    let didPass = false;

    console.groupCollapsed(`Testing ${label}`);

    try {
      didPass = fn();
      if (didPass) console.info("Test Passed");
      else console.error("Test Failed");
    } catch (e) {
      console.error(e);
    }

    console.groupEnd(`Testing ${label}`);

    return { label, pass: didPass };
  });

  console.groupEnd(`JSX Renderer Tests`);

  return results;
}