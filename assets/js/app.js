let n = 0;
function render() {
  const h1 = React.createElement(
    "h1",
    {},
    "Bonjour tous le monde",
    React.createElement("span", {}, n)
  );
  ReactDOM.render(h1, document.getElementById("app"));
}

window.setInterval(() => {
  n++;
  render();
}, 1000);
