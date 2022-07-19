let n = 0;
function numberFormat(nb) {
  return nb.toString().padStart(2, 0);
}
function render() {
  const h1 = (
    <h1 id={"title" + n}>
      Bonjour tous le monde{" "}
      <span className={"span" + (n % 2)}>{numberFormat(n)}</span>
    </h1>
  );
  ReactDOM.render(h1, document.getElementById("app"));
}

window.setInterval(() => {
  n++;
  render();
}, 1000);
