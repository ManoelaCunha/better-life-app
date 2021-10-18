import HabitCard from "../../components/HabitCard"
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
import GroupDetailCard from "../../components/GroupDetailCard";
const Dashboard = () => {

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
      <GroupDetailCard />
    </div>
  )
}

export default Dashboard
