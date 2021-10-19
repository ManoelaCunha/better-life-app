import { createContext, useState, useEffect } from "react";

import toast from "react-hot-toast";

import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(1);

  const [token] = useState(
    JSON.parse(window.localStorage.getItem("@BetterLife:token")) || ""
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

  const createGroup = (data) => {
    api
      .post("groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setGroups([...groups, response.data]);
        toast.success("Grupo criado com sucesso!", {
          icon: "👏",
        });
      })
      .catch((error) => console.log(error));
  };

  const subscribeGroup = (groupId) => {
    api
      .post(`groups/${groupId}/subscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        toast.success("Iscrição realizada com sucesso!", {
          icon: "👏",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <GroupsContext.Provider value={{ groups, createGroup, subscribeGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
