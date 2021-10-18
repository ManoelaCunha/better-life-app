import { createContext, useState, useEffect } from "react";

import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(1);

  const getGroups = () => {
    api
      .get(`groups/?page=${next}`)
      .then((response) => {
        setGroups([...groups, ...response.data.results]);
        response.data.next !== null && setNext(next + 1);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGroups();
  }, [next]);

  return (
    <GroupsContext.Provider value={{ groups, getGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};
