import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyContext from "./MyContext";

const Profile = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  });
  return (
    <MyContext.Consumer>
      {(data) => (
        <div>
          <h1 className="text-2xl font-bold text-gray-700">
            Profile {params.id}
          </h1>
          <ul>
            <li>Name: {data.name}</li>
            <li>Age: {data.age}</li>
          </ul>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Profile;
