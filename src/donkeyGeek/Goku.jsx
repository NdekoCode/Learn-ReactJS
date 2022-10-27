import GokuImg from "../assets/img/Goku.png";
import countHits from "./countHits";
const GokuComponent = ({ name, handleClickHits, hits, life }) => {
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
  const lifeView =
    life > 0 ? (
      <td>{life}</td>
    ) : (
      <td style={{ color: "red" }}> {name} est mort</td>
    );
  return (
    <div className="flex items-center flex-col space-1">
      <div className="w-2">
        <img src={GokuImg} alt="Goku" width={340} />
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
            {lifeView}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const Goku = countHits(GokuComponent, 20);

export default Goku;
