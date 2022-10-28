import React, { useState, useEffect } from "react";

const countHits = (WrappedComponent, power) => (props) => {
  const [hits, setHits] = useState(0);
  const handleClickHits = () => {
    setHits((state) => state + 1);
  };
  useEffect(() => {
    props.hitLife(props.name, hits, power);
    throw new Error("Entrer quelque chose de valide");
  }, [hits, props.name]);
  return (
    <WrappedComponent
      hits={hits}
      handleClickHits={handleClickHits}
      {...props}
    />
  );
};
export default countHits;
