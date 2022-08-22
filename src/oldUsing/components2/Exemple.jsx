import React, { useState, useContext, useMemo, useCallback } from "react";
import { ThemeContext, THEMES } from "./MyComponentToLearnContext";
import { MyComponentToLearnContext } from "./MyComponentToLearnContext";
export function Exemple() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = useCallback(() => {
    return setTheme((t) => (t === "light" ? "dark" : "light"));
  }, []);
  const value = useMemo(
    function () {
      return {
        theme: theme === "light" ? THEMES.light : THEMES.dark,
        toggleTheme: toggleTheme,
      };
    },
    [toggleTheme, theme]
  );
  return (
    <div className="container my-5">
      <ThemeContext.Provider value={value}>
        <MyComponentToLearnContext />
        {/* ThemeSwitcher Est aussi dans mon context donc il peut aussi utilser le contenus de mon context dans sont composant */}
        <ThemeSwitcher></ThemeSwitcher>
      </ThemeContext.Provider>
    </div>
  );
}
function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}> Modifier le theme</button>;
}
