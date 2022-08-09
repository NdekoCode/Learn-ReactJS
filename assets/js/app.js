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
];
function Home() {
  return (
    <div className="container mt-5">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

/**
 * @description contient l’intégralité de l’exemple de la liste des produits, c'est l'application elle-meme
 * @author NdekoCode
 * @class FilterableProductTable
 * @extends {React.Component}
 */
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        <ProductTable products={products} />
      </div>
    );
  }
}
/**
 * @description Affiche et filtre la collection de données en fonction des données saisies par l’utilisateur

 * @author NdekoCode
 * @class ProductTable
 * @extends {React.Component}
 */
class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = [];
    let lastCategory = null;
    const { products } = this.props;
    // NB: * la categorie vient avant sa liste des produits
    // => ? Methode à retenir pour triage par category
    products.forEach((product,index)=>{
      //D'abord On verifie si notre categorie est nouvelle

      if(product.category !==lastCategory) {
        // si il est nouvelle alors on change la valeur de la derniere categorie
        lastCategory = product.category;
        // Puis on ajoute dans la liste des lignes un nouveau element de type category
        rows.push(<ProductCategoryRow key={lastCategory} category={lastCategory}/>)
      }
      // Sinon dans tous les cas pour chacun de mes produits il faut que je pousse une nouvelle ligne de produit, donc quoi qu'il arrive on ajoute un produit à la ligne
      rows.push(<ProductRow key={index} product={product}/>)
    })
    return (
      <table className="table table-responsive">
        <thead >
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
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
function ProductRow({product}) {
  const name = product.stocked ? product.name : <span className="text-danger" title="Le produit n'est pas de stock ">{product.name}</span>
  return <tr className="w-100">
            <td>{name}</td>
              <td>{product.price}</td>
            </tr>
}

/**
 * @description  affiche le titre pour chaque catégorie dans une ligne
 * @author NdekoCode
 * @param {*} {category}
 * @return {*} 
 */
function ProductCategoryRow({category}) {
  return  <tr>
        <th  colSpan="2">{category}</th>
  </tr>
}
ReactDOM.render(<Home />, document.getElementById("app"));
