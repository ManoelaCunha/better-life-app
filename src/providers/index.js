import { GoalsProvider } from "./Goals"
import { HabitProvider } from "./Habits"
import { UserProvider } from "./User"

const Providers = ({ children }) => {
  return (<UserProvider>
    <HabitProvider>
      <GoalsProvider>
        {children}
      </GoalsProvider>
    </HabitProvider>
  </UserProvider>)
}
export default Providers
