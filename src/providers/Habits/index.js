import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token")) || "";
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setHabits(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const removeHabits = (id) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token")) || "";
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Habito deletado com sucesso."))
      .catch((err) => console.log(err));
    const newHabits = habits.filter((habit) => habit.id !== id);
    setHabits(newHabits);
  };

  const updateHabitProgress = (id, newProgress) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token")) || "";
    let isAchieved = false;
    if (newProgress >= 100) {
      isAchieved = true;
      newProgress = 100;
      toast("Habito concluído!", {
        icon: "👏",
      });
    }

    const updatedHabit = {
      how_much_achieved: newProgress,
      achieved: isAchieved,
    };
    api
      .patch(`/habits/${id}/`, updatedHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Progresso do hábito atualizado!"))
      .catch((err) => console.log(err));
  };

  const addNewHabit = (data) => {
    const token = JSON.parse(localStorage.getItem("@BetterLife:token")) || "";
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits([...habits, response.data]);
        toast.success("Hábito cadastrado com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        getHabits,
        updateHabitProgress,
        removeHabits,
        addNewHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
