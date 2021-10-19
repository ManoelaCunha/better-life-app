import HabitCard from "../../components/HabitCard";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
import GroupDetailCard from "../../components/GroupDetailCard";
import { GroupsContext } from "../../providers/Groups";
import { Box, Container, Text, ButtonContainerDashboard } from "./style";
import Menu from "../../components/Menu";
import { Redirect, useHistory } from "react-router-dom";

const Dashboard = ({ authenticated }) => {
  const { getUser, userName, getUserName } = useContext(UserContext);
  const { getHabits, habits } = useContext(HabitsContext);
  const { getSubscribedGroups } = useContext(GroupsContext);
  let history = useHistory();

  useEffect(() => {
    getUser();
    getHabits();
    getSubscribedGroups();
    getUserName();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <Container>
        <Text>
          Bem vinda(o) de volta, <strong>{userName}</strong>
        </Text>
        <Box>
          <h1>Hábitos</h1>
          <ButtonContainerDashboard style={{ margin: "0px 5px" }}>
            <button
              style={{
                width: "150px",
                background: "transparent",
                color: "#000000",
                boxShadow: "none",
                fontSize: "20px",
                fontFamily: "Montserrat",
                textAlign: "right",
              }}
            >
              + Novo Habito
            </button>
          </ButtonContainerDashboard>
        </Box>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
