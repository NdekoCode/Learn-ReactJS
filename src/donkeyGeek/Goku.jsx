import React, { useState } from "react";
import GokuImg from "../assets/img/Goku.png";
const Goku = ({ name }) => {
  const [hits, setHits] = useState(0);
  const handleClick = () => setHits((state) => state + 1);
  return (
    <div className="flex items-center flex-col space-1">
      <div className="w-2">
        <img src={GokuImg} alt="Goku" width={340} />
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

export default Goku;
