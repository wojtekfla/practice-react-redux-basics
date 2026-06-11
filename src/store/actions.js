export const GET_CURRENT_TIME = "GET_CURRENT_TIME";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const REMOVE_ALL_USERS = "REMOVE_ALL_USERS";

export const getCurrentTime = () => ({
  type: GET_CURRENT_TIME,
});

export const addUser = (name) => ({
  type: ADD_USER,
  payload: name,
});

export const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: id,
});

export const removeAllUsers = () => ({
  type: REMOVE_ALL_USERS,
});
