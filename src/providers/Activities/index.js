import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const getActivities = (group) => {
    api
      .get(`/activities/?group=${group}`)
      .then((resp) => {
        setActivities(resp.data.results);
      })
      .catch((err) => console.log(err));
  };

  const removeActivity = (id) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Atividade deletada com sucesso."))
      .catch((err) => console.log(err));
    const newActivities = activities.filter((goal) => goal.id !== id);
    setActivities(newActivities);
  };

  const createActivities = (data) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api
      .post("activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActivities([...activities, response.data]);
        toast.success("Atividade cadastrada com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <ActivitiesContext.Provider
      value={{ activities, getActivities, removeActivity, createActivities }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
