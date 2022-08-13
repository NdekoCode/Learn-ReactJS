import React from "react";
import "../assets/css/loader.css";
import { usePostComments } from "../hooks/Hooks";

export function PostTable() {
  const [postComments, loading] = usePostComments();
  if (loading) {
    return (
      <div className="loadingContainer">
        <div className="loading">
          <span className="loadWords">Loading...</span>
          <span className="loading__anim"></span>
        </div>
      </div>
    );
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Contenus</th>
        </tr>
      </thead>
      <tbody>
        {postComments.map(({ id, name, email, body }, index) => (
          <tr key={index}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
