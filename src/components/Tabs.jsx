import React from "react";
export function Tabs({ children }) {
  children = React.Children.toArray(children);
  console.log(children);
  return (
    <div>
      <nav>
        {children.map((child) => (
          <a href="#" key={child.key}>
            {child.props.title}
          </a>
        ))}
      </nav>
      {children}
    </div>
  );
}
export function Tab({ children, selected }) {
  return (
    <div hidden={!selected}>
      <p>{children}</p>
    </div>
  );
}
