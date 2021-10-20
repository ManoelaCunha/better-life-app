import { CardGroupDetailBody } from "./style";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { GoalsContext } from "../../providers/Goals";
import GoalCard from "../GoalCard";
import { ButtonContainer } from "../Button/style";
//import { ButtonContainer } from "../HabitCard/style";
import { ActivitiesContext } from "../../providers/Activities";
import { GroupsContext } from "../../providers/Groups";
import { FormControlUnstyledContext } from "@material-ui/unstyled";

const GroupDetailCard = ({ groupId, openModal }) => {
  const { goals, getGoals } = useContext(GoalsContext);
  const { activities, getActivities } = useContext(ActivitiesContext);
  const {
    subscribedGroups,
    subscribeGroup,
    unsubscribeGroup,
    getSubscribedGroups,
  } = useContext(GroupsContext);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const activityList = activities.map((activity) => {
    const date = new Date(activity.realization_time);
    const newDate = [date.getDate(), date.getMonth(), date.getFullYear()].join(
      "/"
    );
    return (
      <li key={activity.id}>
        <h4>{activity.title}</h4>
        <p>Data Limite: {newDate}</p>
        <hr style={{ opacity: 0.2, margin: "5px" }} />
      </li>
    );
  });

  useEffect(() => {
    getGoals(groupId);
    getActivities(groupId);
    getSubscribedGroups();
    subscribedGroups.includes(Number(groupId))
      ? setIsSubscribed(true)
      : setIsSubscribed(false);
  }, []);

  useEffect(() => {
    subscribedGroups.includes(Number(groupId))
      ? setIsSubscribed(true)
      : setIsSubscribed(false);
    console.log(subscribedGroups, groupId);
    console.log(subscribedGroups.includes(Number(groupId)));
  }, [subscribedGroups]);

  return (
    <CardGroupDetailBody>
      <h2>Nome do Grupo</h2>
      <p>Categoria do Grupo</p>
      <ButtonContainer style={{ margin: "0px" }}>
        {!isSubscribed && (
          <Button text={"Inscreva-se"} onClick={() => subscribeGroup(groupId)}>
            Inscreva-se
          </Button>
        )}
        {isSubscribed && (
          <Button
            text={"Sair do grupo"}
            onClick={() => unsubscribeGroup(groupId)}
          />
        )}
      </ButtonContainer>
      <p>Descrição do Grupo</p>
      <div>
        <h3>Metas</h3>
        {goals.map((goal) => (
          <GoalCard goal={goal} key={goal.id} isSubscribed={isSubscribed} />
        ))}
      </div>
      <div>
        <h3>Atividades</h3>
        <ButtonContainer style={{ margin: "0px" }}>
          <button onClick={openModal}>Criar Atividade</button>
        </ButtonContainer>
        <ul>{activityList}</ul>
      </div>
    </CardGroupDetailBody>
  );
};

export default GroupDetailCard;
