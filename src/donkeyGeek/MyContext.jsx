import React, { createContext } from "react";

const user = {
  name: "Ndekocode",
  age: 8,
};
const MyContext = createContext(user);

export default MyContext;
