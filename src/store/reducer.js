import {
  GET_CURRENT_TIME,
  ADD_USER,
  REMOVE_USER,
  REMOVE_ALL_USERS,
} from "./actions";

const initialState = {
  message: "Działa",
  time: new Date(),
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_TIME:
      return {
        ...state,
        time: new Date(),
      };

    case ADD_USER: {
      const lastId = state.users.reduce(
        (max, user) => (max > user.id ? max : user.id),
        0,
      );

      const newUser = {
        id: lastId + 1,
        name: action.payload,
      };

      return {
        ...state,
        users: [...state.users, newUser],
      };
    }

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case REMOVE_ALL_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default reducer;
