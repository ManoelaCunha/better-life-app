import { HabitProvider } from "./Habits"
import { UserProvider } from "./User"

const Providers = ({ children }) => {
  return (<UserProvider>
    <HabitProvider>
      {children}
    </HabitProvider>
  </UserProvider>)
}
export default Providers
