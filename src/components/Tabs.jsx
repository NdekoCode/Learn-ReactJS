import React, { useState } from "react";
export function Tabs({ children }) {
  children = React.Children.toArray(children);
  console.log(children);
  //   On recupère l'indice du premier element de children et on en fait un Etat
  const [current, setCurrent] = useState(children[0].key);
  // On va cloner nos elements pour avoir la possibilité de modifier leurs proprieter
  const newChildren = children.map((child) => {
    // On clone notre element et on ajoute aux props un element selected qui va etre vrais que si sa clé est égale à la valeur de l'element courrant
    return React.cloneElement(child, { selected: child.key === current });
  });
  return (
    <div>
      <nav>
        {newChildren.map((child) => (
          <button onClick={() => setCurrent(child.key)} key={child.key}>
            {child.props.title}
          </button>
        ))}
      </nav>
      {newChildren}
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
