import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { key } from "../key/apiKey";


export const ClientsContext = createContext({ clients: "loading" });

const ClientsProvider = (props) => {
  const [clients, setClients] = useState(null);
  const { children } = props;

  useEffect(() => {
    Axios.get(`${key}clients`)
      .then((response) => {
          console.log(response);
        setClients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const reFetch = () => {
    setClients("loading");
    Axios.get(`${key}clients`)
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ClientsContext.Provider value={{ clients, setClients, reFetch }}>
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;
