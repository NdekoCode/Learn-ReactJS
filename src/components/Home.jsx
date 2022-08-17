import React, { createContext, useContext } from "react";
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
  const value = useContext(ThemeContext);
  return <button style={value}>{children}</button>;
}
export const ThemeContext = createContext(theme.dark);
export function Home() {
  return (
    <div className="container my-5">
      <ThemeContext.Consumer>
        {(value) => <Context style={value} />}
      </ThemeContext.Consumer>
    </div>
  );
}
