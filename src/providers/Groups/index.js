import { createContext, useState, useEffect } from "react";

import toast from "react-hot-toast";

import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(1);

  const [token] = useState(
    JSON.parse(window.localStorage.getItem("@BetterLife:user")) || ""
  );

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

  const handleCreateGroup = (data) => {
    api
      .post("groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setGroups([...groups, response.data]);
        toast("Grupo criado com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <GroupsContext.Provider value={{ groups, handleCreateGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
