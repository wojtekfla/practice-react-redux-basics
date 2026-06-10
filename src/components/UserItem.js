import React from "react";
import { useDispatch } from "react-redux";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}{" "}
      <button onClick={() => dispatch({ type: "removeUser", payload: id })}>
        usuń
      </button>
    </li>
  );
};

export default UserItem;
