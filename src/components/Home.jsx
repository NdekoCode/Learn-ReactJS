import React, { createContext } from "react";
import { Context } from "./Context";
const theme = {
  dark: {
    background: "#333",
    color: "#f1f1f1",
  },
  light: {
    background: "#f1f1f1",
    color: "#333",
  },
};

export function ThemedButton({ children }) {
  return (
    <ThemeContext.Consumer>
      {(value) => <button style={value}>{children}</button>}
    </ThemeContext.Consumer>
  );
}
export const ThemeContext = createContext(theme.dark);
export function Home() {
  return (
    <div className="container my-5">
      <Context />
    </div>
  );
}
