import React, { useState } from "react";
export function Compter() {
  const [count, setState] = useState(0);
  console.log(count);
  return <button>{count}</button>;
}
