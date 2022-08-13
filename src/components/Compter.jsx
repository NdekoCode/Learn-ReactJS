/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useIncrement, useAutoIncrement } from "../hooks/Hooks";

export function Compter() {
  const [count, increment] = useIncrement(1, 1, true);
  console.log("render");
  return <button onClick={increment}>Increment {count}</button>;
}
export function AutoCompter() {
  const count = useAutoIncrement(1, 1);
  return <button>Increment {count}</button>;
}
