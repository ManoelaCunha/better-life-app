import { GroupsProvider } from "./Groups";
import { HabitProvider } from "./Habits";
import { UserProvider } from "./User";
import { GoalsProvider } from "./Goals";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitProvider>
        <GroupsProvider>
          <GoalsProvider>
            {children}
          </GoalsProvider>
        </GroupsProvider>
      </HabitProvider>
    </UserProvider>
  );
};
export default Providers;
