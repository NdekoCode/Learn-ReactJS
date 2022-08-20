import { React, createContext, Component, useContext } from "react";

export const THEMES = {
  dark: {
    background: "#333",
    color: "#f1f1f1",
  },
  light: {
    background: "#f1f1f1",
    color: "#333",
  },
};
export const ThemeContext = createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
});
function ThemeButton({ children }) {
  const { theme } = useContext(ThemeContext);
  return <button style={theme}>{children}</button>;
}
export class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    const { theme } = this.context;
    return (
      <div>
        <button className="" style={theme}>
          {this.props.children}
        </button>
      </div>
    );
  }
}
MyButton.contextType = ThemeContext;
export function MyComponentToLearnContext() {
  return (
    <div>
      <Toolbar />
    </div>
  );
}

export function SearchForm() {
  return (
    <div className="form-group">
      <input type="text" className="form-control" />
      <ThemeButton>Rechercher</ThemeButton>
    </div>
  );
}
export function Toolbar() {
  return (
    <div>
      <SearchForm />
      <ul>
        <li>Tache 1</li>
        <li>Tache 2</li>
        <li>Tache 3</li>

        <MyButton>Commentaire</MyButton>
      </ul>
      <ThemeButton>Mon bouton</ThemeButton>
    </div>
  );
}
