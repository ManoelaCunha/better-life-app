import Button from "../Button";
import { useContext, useEffect, useState } from "react";

import { CardGroupDetailBody, ActivityContainer, GoalContainer } from "./style";
import { ButtonContainer } from "../Button/style";

import { GroupsContext } from "../../providers/Groups";
import { GoalsContext } from "../../providers/Goals";
import { ActivitiesContext } from "../../providers/Activities";

import ModalCreateActivities from "../ModalCreateActivities";
import GoalCard from "../GoalCard";
import ActivityCard from "../ActivityCard";

import CreateGroupGoalModal from "../../components/CreateGroupGoal";

const GroupDetailCard = ({ groupId, authenticated }) => {
  const { goals, getGoals } = useContext(GoalsContext);

  const { activities, getActivities, removeActivity } =
    useContext(ActivitiesContext);
  const {
    subscribedGroups,
    subscribeGroup,
    unsubscribeGroup,
    getSubscribedGroups,
  } = useContext(GroupsContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [modalActivityIsOpen, setModalActivityIsOpen] = useState(false);
  const [modalGoalIsOpen, setModalGoalIsOpen] = useState(false);

  useEffect(() => {
    if (authenticated) {
      getGoals(groupId);
      getActivities(groupId);
      getSubscribedGroups();
      subscribedGroups.includes(Number(groupId))
        ? setIsSubscribed(true)
        : setIsSubscribed(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      subscribedGroups.includes(Number(groupId))
        ? setIsSubscribed(true)
        : setIsSubscribed(false);
      console.log(subscribedGroups.includes(Number(groupId)));
    }
  }, [subscribedGroups]);

  console.log(subscribedGroups, groupId);
  const openModalActivity = () => {
    setModalActivityIsOpen(true);
  };

  const openModalGoal = () => {
    setModalGoalIsOpen(true);
  };

  return (
    <>
      <CardGroupDetailBody>
        <h2>Nome do Grupo</h2>
        <p>Categoria do Grupo</p>
        <ButtonContainer style={{ margin: "0px" }}>
          {!isSubscribed && (
            <Button
              text={"Inscreva-se"}
              onClick={() => subscribeGroup(groupId)}
            >
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
          <ButtonContainer style={{ margin: "0px" }}>
            {isSubscribed && (
              <button onClick={openModalGoal}>Criar Meta</button>
            )}
          </ButtonContainer>
          <GoalContainer>
            {goals.map((goal) => (
              <GoalCard goal={goal} key={goal.id} isSubscribed={isSubscribed} />
            ))}
          </GoalContainer>
        </div>
        <div>
          <h3>Atividades</h3>
          <ButtonContainer style={{ margin: "0px" }}>
            {isSubscribed && (
              <button onClick={openModalActivity}>Criar Atividade</button>
            )}
          </ButtonContainer>
          <ActivityContainer>
            <ul>
              {activities.map((activity, index) => (
                <ActivityCard
                  key={activity.id}
                  index={index}
                  activity={activity}
                  activityId={activity.id}
                  isSubscribed={isSubscribed}
                  removeActivity={removeActivity}
                />
              ))}
            </ul>
          </ActivityContainer>
        </div>
      </CardGroupDetailBody>
      <ModalCreateActivities
        groupId={groupId}
        modalActivityIsOpen={modalActivityIsOpen}
        setModalActivityIsOpen={setModalActivityIsOpen}
      />
      <CreateGroupGoalModal
        groupId={groupId}
        modalGoalIsOpen={modalGoalIsOpen}
        setModalGoalIsOpen={setModalGoalIsOpen}
      />
    </>
  );
};

export default GroupDetailCard;
