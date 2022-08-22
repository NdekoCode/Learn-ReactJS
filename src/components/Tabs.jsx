import React from "react";
export function Tabs({ children }) {
  children = React.Children.toArray(children);
  console.log(children);
  return (
    <div>
      Hello <br />
      {children}
    </div>
  );
}
export function Tab({ title, children }) {
  return (
    <div>
      World
      <h3>
        <a href="#d">{title}</a>
      </h3>
      <p>{children}</p>
    </div>
  );
}
