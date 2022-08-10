const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  {
    category: "Sporting Goods",
    price: "$299.99",
    stocked: true,
    name: "Nexus 9",
  },
  {
    category: "Electronics",
    price: "$599.99",
    stocked: false,
    name: "iPhone X",
  },
  {
    category: "Sporting Goods",
    price: "$39.99",
    stocked: true,
    name: "Jordan",
  },
];

/**
 * @description contient l’intégralité de l’exemple de la liste des produits, c'est l'application elle-meme
 * @author NdekoCode
 * @class FilterableProductTable
 * @extends {React.Component}
 */
class FilterableProductTable extends React.PureComponent {
  constructor(props) {
    super(props);
    /**
     * @param {String} [this.state.filterText=''] L'etat du text, càd le texte par rapport auxquel on fait le filtre
     * @param {Boolean} [this.state.inStockOnly=false] Permet de savoir si pour l'instant on veux voir que les produits qui sont en stock ou non
     */
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterIsStockOnly = this.handleFilterIsStockOnly.bind(this);
  }
  /**
   * @description Va permettre au composant SearchBar de faire remonter les informations de son input de type texte pour filtrer par rapport au mot entrer par l'utilisateur dans ce champs
   * @author NdekoCode
   * @param {String} filterTextNewValue L'element à modifier et qui
   * @memberof FilterableProductTable
   */
  handleFilterTextChange(filterTextNewValue) {
    this.setState({ filterText: filterTextNewValue });
  }
  /**
   * @description Va permettre au composant SearchBar de faire remonter les informations de son input de type checkbox pour filtrer ou pas par rapport aux produit en stock
   * @author NdekoCode
   * @param {Boolean} {inStockOnlyNewValue} L'element à modifier
   * @memberof FilterableProductTable
   */
  handleFilterIsStockOnly(inStockOnlyNewValue) {
    this.setState({ inStockOnly: inStockOnlyNewValue });
  }
  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;
    return (
      <React.Fragment>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onFilterIsStockOnlyChange={this.handleFilterIsStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </React.Fragment>
    );
  }
}
/**
 * @description Affiche et filtre la collection de données en fonction des données saisies par l’utilisateur

 * @author NdekoCode
 * @class ProductTable
 * @extends {React.Component}
 */
class ProductTable extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = [];
    let categories = [];
    // Le tableau qui va contenir les produits trier par categorie
    let newProducts = [];
    let lastCategory = null;
    const { products, inStockOnly, filterText } = this.props;
    // On parcours tous les produits pour extraire uniquement les categories
    products.forEach((product) => {
      categories.push(product.category);
    });
    // On supprime les doublons dans les categories que l'on a obtenus
    categories = [...new Set(categories)];
    // On parcours tous les categories unique
    categories.forEach((category) => {
      // Pour chaque categorie on on associe les produits qui leurs correspond
      newProducts.push(
        ...products.filter((newProduct) => newProduct.category === category)
      );
    });

    // NB: * la categorie vient avant sa liste des produits
    // => ? Methode à retenir pour triage par category
    newProducts.forEach((product, index) => {
      // Si on veux avoir uniquement les produit en stock alors sotte tous les indice dont les produit ne sont pas en stock OU si l'element que l'on recherche ne correspond à aucun nom alors saute tous les element dont le nom ne correspond pas à la recherche taper par l'utilisateur, sachez que avec cette methode si l'utilisateur n'a rien rechercher alors tous les produits seront retourner
      if (
        (inStockOnly && !product.stocked) ||
        product.name.indexOf(filterText)
      ) {
        return null;
      }

      //D'abord On verifie si notre categorie est nouvelle

      if (product.category !== lastCategory) {
        // si il est nouvelle alors on change la valeur de la derniere categorie
        lastCategory = product.category;
        categories.push(lastCategory);
        // Puis on ajoute dans la liste des lignes un nouveau element de type category
        rows.push(
          <ProductCategoryRow key={lastCategory} category={lastCategory} />
        );
      }
      // Sinon dans tous les cas pour chacun de mes produits il faut que je pousse une nouvelle ligne de produit, donc quoi qu'il arrive on ajoute un produit à la ligne
      rows.push(<ProductRow key={index} product={product} />);
    });
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

/**
 * @description affiche une ligne pour chaque produit
 * @author NdekoCode
 * @param {Array} {product}
 * @return {React.Component}
 */
function ProductRowComponent({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-danger" title="Le produit n'est pas de stock ">
      {product.name}
    </span>
  );
  // wait(500);
  return (
    <tr className="w-100">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
const ProductRow = React.memo(ProductRowComponent);
/**
 * @description  affiche le titre pour chaque catégorie dans une ligne
 * @author NdekoCode
 * @param {*} {category}
 * @return {*}
 */
function ProductCategoryRowComponent({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}
const ProductCategoryRow = React.memo(ProductCategoryRowComponent);
class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleIsStockOnly = this.handleIsStockOnly.bind(this);
  }
  handleFilterText({ target }) {
    /** le callback a appeler lorsque les changement on été effectué sur cet element enfant */
    this.props.onFilterTextChange(target.value);
  }
  handleIsStockOnly({ target }) {
    /** le callback a appeler lorsque les changement on été effectué sur cet element enfant */
    this.props.onFilterIsStockOnlyChange(target.checked);
  }
  render() {
    const { filterText, isStockOnly } = this.props;
    return (
      <div className="mb-3">
        <div className="form-group mb-2">
          <input
            type="search"
            placeholder="Rechercher..."
            value={filterText}
            onChange={this.handleFilterText}
            name="search"
            id="search"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            onChange={this.handleIsStockOnly}
            checked={isStockOnly}
            className="form-check-input"
            name="filter"
            id="filter"
          />
          <label htmlFor="filter" className="form-check-label">
            Afficher uniquement les produits en stock
          </label>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <div className="container mt-5">
    <FilterableProductTable products={PRODUCTS} />
  </div>,
  document.getElementById("app")
);
PRODUCTS.push({
  category: "Electronics",
  price: "$899.99",
  stocked: false,
  name: "iPhone 11 Pro",
});
window.setTimeout(() => {
  ReactDOM.render(
    <div className="container mt-5">
      <FilterableProductTable products={PRODUCTS} />
    </div>,
    document.getElementById("app")
  );
}, 2000);
