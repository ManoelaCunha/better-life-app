import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const getGoals = (group) => {
    api
      .get(`/goals/?group=${group}`)
      .then((resp) => {
        setGoals(resp.data.results);
      })
      .catch((err) => console.log(err));
  };

  const removeGoal = (id) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Meta deletada com sucesso."))
      .catch((err) => console.log(err));
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  };

  const updateGoalProgress = (id, newProgress) => {
    let isAchieved = false;
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));

    if (newProgress >= 100) {
      isAchieved = true;
      newProgress = 100;
      toast("Meta concluída!", {
        icon: "👏",
      });
    }

    const updatedGoal = {
      how_much_achieved: newProgress,
      achieved: isAchieved,
    };
    api
      .patch(`/goals/${id}/`, updatedGoal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Progresso da meta incrementada."))
      .catch((err) => console.log(err));
  };

  const createGoals = (data) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token"));
    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGoals([...goals, response.data]);
        toast.success("Meta cadastrada com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        getGoals,
        createGoals,
        updateGoalProgress,
        removeGoal,
        setGoals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
