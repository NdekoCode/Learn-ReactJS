import React, { useState } from "react";
import vegetaImg from "../assets/img/vegeta.png";
const Vegeta = ({ name }) => {
  const [hits, setHits] = useState(0);
  const handleClick = () => setHits((state) => state + 1);
  return (
    <div className="flex items-center flex-col space-1">
      <div className="w-2">
        <img src={vegetaImg} alt="Vegeta" width={340} />
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        {name} frapper
      </button>
      <table>
        <thead>
          <tr>
            <th scope="col">Coups</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Vegeta;
