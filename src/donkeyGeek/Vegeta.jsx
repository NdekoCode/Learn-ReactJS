import vegetaImg from "../assets/img/vegeta.png";
import countHits from "./countHits";
const VegetaComponent = ({ name, handleClickHits, hits, life }) => {
  const button =
    life > 0 ? (
      <button className="btn btn-primary" onClick={handleClickHits}>
        {name} Frapper
      </button>
    ) : (
      <button
        className="btn btn-danger"
        disabled={true}
        onClick={handleClickHits}
      >
        {name} Frapper
      </button>
    );
  return (
    <div className="flex items-center flex-col space-1">
      <div className="w-2">
        <img src={vegetaImg} alt="Vegeta" width={340} />
      </div>
      {button}
      <table>
        <thead>
          <tr>
            <th scope="col">Coups</th>
            <th scope="col">Vie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits}</td>
            <td>{life > 0 ? life : name + " est mort"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Vegeta = countHits(VegetaComponent, 10);
export default Vegeta;
