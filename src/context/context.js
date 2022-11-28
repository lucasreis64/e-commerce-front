import { createContext, useEffect, useState } from "react";

export const contexto = createContext("");

export const Context = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [permanecerConectado, setPermanecerConectado] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage?.getItem("userInfo"))
  );

  return (
    <contexto.Provider
      value={{
        userInfo,
        token,
        setToken,
        setUserInfo,
        permanecerConectado,
        setPermanecerConectado,
      }}
    >
      {props.children}
    </contexto.Provider>
  );
};
