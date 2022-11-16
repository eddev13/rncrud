import React, { createContext, useReducer } from "react";
import users from "../data/users";

const initialState = { users };
const UserContext = createContext({});

export const UsersProvider = (props) => {
  const reducer = (state, action) => {
    // console.warn(action);
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
