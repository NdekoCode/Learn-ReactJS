import React, { memo } from "react";

export const Button = memo(function ({ handleClick }) {
  console.log("render");
  return (
    <div className="my-1">
      <button className="btn btn-primary" onClick={handleClick}>
        Mon boutton
      </button>
    </div>
  );
});
