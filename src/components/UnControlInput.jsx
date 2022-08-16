import React, { useRef } from "react";
export function UnControlInput() {
  const input = useRef(null);
  const compter = useRef({ count: 0 });
  const handleClick = () => {
    compter.current.count++;
  };
  const handleChange = () => {
    console.log(input.current.value);
  };
  return (
    <div className="container mt-5">
      <div className="form-group d-flex align-items-center w-100">
        <input
          type="text"
          ref={input}
          className="form-control rounded-0 rounded-start"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="btn btn-primary w-25 rounded-0 rounded-end"
        >
          Get value {compter.current.value}
        </button>
      </div>
    </div>
  );
}
