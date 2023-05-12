import React from "react";
import PropTypes from "prop-types";
import "./style.css";

ListUser.propTypes = {
  dataUser: PropTypes.array,
};

ListUser.defaultProps = {
  dataUser: [],
};

function ListUser({ dataUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Birthday</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {dataUser.map((user, index) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.birthday}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListUser;
