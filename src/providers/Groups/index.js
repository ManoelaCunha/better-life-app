import { createContext, useState, useEffect } from "react";

import toast from "react-hot-toast";

import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(1);
  const [subscribedGroups, setSubscribedGroups] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@BetterLife:token"))
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
        setGroups([...groups, response.data]);
        toast.success("Grupo criado com sucesso!", {
          icon: "👏",
        });
      })
      .catch((error) => console.log(error));
  };

  const subscribeGroup = (id) => {
    api
      .post(
        `groups/${id}/subscribe/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast.success("Inscrição feita com sucesso!");
        setSubscribedGroups([...subscribedGroups, Number(id)]);
      })
      .catch((err) => console.log(err));
  };

  const unsubscribeGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Removido do grupo com sucesso!");
        const newSubGroups = subscribedGroups.filter(
          (groupId) => groupId !== Number(id)
        );

        setSubscribedGroups(newSubGroups);
      })
      .catch((err) => console.log(err));
  };

  const getSubscribedGroups = () => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        const newSubGroups = resp.data.map((group) => Number(group.id));
        setSubscribedGroups(newSubGroups);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        createGroup,
        subscribeGroup,
        unsubscribeGroup,
        getSubscribedGroups,
        subscribedGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
