import HabitCard from "../../components/HabitCard"
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
const Dashboard = () => {

  const habit = {
    "title": "Calistenia a tarde (15 minutos)",
    "category": "Sáude",
    "difficulty": "Muito díficil",
    "frequency": "Diária",
    "achieved": false,
    "how_much_achieved": 30,
    "user": 1
  }
  const { getUser } = useContext(UserContext);
  const { getHabits, habits } = useContext(HabitsContext);

  useEffect(() => {
    getUser()
  }, [getUser]);

  useEffect(() => {
    getHabits()
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {habits.map((habit) => <HabitCard key={habit.id} habit={habit} />)}

    </div>
  )
}

export default Dashboard
