import React, { memo } from "react";

export const Button = memo(function ({ onClick }) {
  console.log("render");
  return (
    <div className="my-1">
      <button className="btn btn-primary" onClick={onClick}>
        Mon boutton
      </button>
    </div>
  );
});
