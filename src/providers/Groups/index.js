import { createContext, useState, useEffect } from "react";

import toast from "react-hot-toast";

import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(1);
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [specificGroup, setSpecificGroup] = useState({
    "id": '',
    "name": '',
    "description": "",
    "category": "",
    "creator": {
      "id": '',
      "username": "",
      "email": ""
    },
    "users_on_group": [
    ],
  });



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
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
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
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
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
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
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
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
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

  const editGroup = (id, data) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api
      .patch(`groups/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        toast.success('Grupo editado');
        setSpecificGroup(resp.data);
      })
      .catch((err) => toast.error('Apenas o administrador do grupo pode editar'));
  };

  const getInfoGroup = (id) => {
    api
      .get(`groups/${id}/`)
      .then((resp) => {
        setSpecificGroup(resp.data);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <GroupsContext.Provider
      value={{
        groups,
        createGroup,
        subscribeGroup,
        unsubscribeGroup,
        getSubscribedGroups,
        subscribedGroups,
        specificGroup,
        getInfoGroup,
        editGroup,
        setSpecificGroup
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
