let n = 0;
function render() {
  const h1 = (
    <h1>
      Bonjour tous le monde <span>{n}</span>
    </h1>
  );
  ReactDOM.render(h1, document.getElementById("app"));
}

window.setInterval(() => {
  n++;
  render();
}, 1000);
