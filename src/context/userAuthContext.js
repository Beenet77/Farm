import { createContext, useContext, useState } from "react";

const UserAuth = createContext();

const UserAuthContext = ({ children }) => {
  const [loginUser, setLoginUser] = useState();

  return (
    <UserAuth.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </UserAuth.Provider>
  );
};

export let useGlobalUserAuth = () => {
  return useContext(UserAuth);
};

export default UserAuthContext;
