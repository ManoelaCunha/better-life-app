import { createContext, useState, useEffect } from "react";

import toast from "react-hot-toast";

import api from "../../services/api";
import axios from 'axios';


export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(1);
  const [subscribedGroups, setSubscribedGroups] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@BetterLife:token")) || ""
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

  const subscribeGroup = (id) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    axios.post(`https://kenzie-habits.herokuapp.com/groups/${id}/subscribe/`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        toast.success("Inscrição feita com sucesso!");
        setSubscribedGroups([...subscribedGroups, id]);
      }).catch((err) => console.log(err));
  };

  const unsubscribeGroup = (id) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api.delete(`groups/${id}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then(() => {
      toast.success("Removido do grupo com sucesso!");
      const newSubGroups = subscribedGroups.filter((groupId) => groupId !== id);
      setSubscribedGroups(newSubGroups);
    }).catch((err) => console.log(err));
  };

  const getSubscribedGroups = () => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api.get('groups/subscriptions/', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((resp) => {
      const newSubGroups = resp.data.map((group) => group.id);
      setSubscribedGroups(newSubGroups);
    }).catch(err => console.log(err.message));
  };

  return (
    <GroupsContext.Provider value={{ groups, handleCreateGroup, subscribeGroup, unsubscribeGroup, getSubscribedGroups, subscribedGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};
