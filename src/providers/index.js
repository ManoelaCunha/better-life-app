import { GroupsProvider } from "./Groups";
import { HabitProvider } from "./Habits";
import { UserProvider } from "./User";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitProvider>
        <GroupsProvider>
          <GoalsProvider>
            <ActivitiesProvider>
              {children}
            </ActivitiesProvider>
          </GoalsProvider>
        </GroupsProvider>
      </HabitProvider>
    </UserProvider>
  );
};
export default Providers;
