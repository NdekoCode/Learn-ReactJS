import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Community = (props) => {
  const history = useNavigate();
  useEffect(() => {
    console.log(props);
    if (props.render) {
      setTimeout(() => history("/"), 5000);
    }
  });
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700">Community</h1>
      <p>La page est en construction</p>
    </div>
  );
};

export default Community;
