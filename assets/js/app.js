let n = 0;
function numberFormat(nb) {
  return nb.toString().padStart(2, 0);
}
function render() {
  // Quand vous essayer de creer plusieurs elements sans forcement qu'il y est plusieurs racine definit
  const items = ["Tache 1", "Tache 2", "Tache 3", "Tache 4", "Tache 5"];
  const h1 = (
    <React.Fragment>
      <h1 id={"title" + n}>
        Bonjour tous le monde{" "}
        <span className={"span" + (n % 2)}>{numberFormat(n)}</span>
      </h1>
      <ul>
        <li>List 1</li>
      </ul>
    </React.Fragment>
  );
  ReactDOM.render(h1, document.getElementById("app"));
}

window.setInterval(() => {
  n++;
  render();
}, 1000);
