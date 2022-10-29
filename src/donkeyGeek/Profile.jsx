import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = (pros) => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  });
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700">Profile {params.id}</h1>
    </div>
  );
};

export default Profile;
