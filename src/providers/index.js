import { GroupsProvider } from "./Groups";
import { HabitProvider } from "./Habits";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitProvider>
        <GroupsProvider>{children}</GroupsProvider>
      </HabitProvider>
    </UserProvider>
  );
};
export default Providers;
