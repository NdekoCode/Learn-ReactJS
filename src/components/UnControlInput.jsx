import React, { useRef } from "react";
export function UnControlInput() {
  const input = useRef(null);
  const compter = useRef({ count: 0 });
  const handleClick = () => {
    compter.current.count++;
    console.log(compter);
  };
  const handleChange = () => {
    console.log(input.current.value);
  };
  return (
    <div className="container mt-5">
      <input type="text" ref={input} onChange={handleChange} />
      <button onClick={handleClick}>Recuperer la valeur {compter.count}</button>
    </div>
  );
}
