import { useContext, useEffect, useState } from "react";

import { CardGroupDetailBody, ActivityContainer } from "./style";
import { ButtonContainer } from "../Button/style";

import { GroupsContext } from "../../providers/Groups";
import { GoalsContext } from "../../providers/Goals";
import { ActivitiesContext } from "../../providers/Activities";

import ModalCreateActivities from "../ModalCreateActivities";
import GoalCard from "../GoalCard";
import ActivityCard from "../ActivityCard";
import Button from "../Button";

const GroupDetailCard = ({ groupId }) => {
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

  const openModalActivity = () => {
    setModalActivityIsOpen(true);
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
          {goals.map((goal) => (
            <GoalCard goal={goal} key={goal.id} isSubscribed={isSubscribed} />
          ))}
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
    </>
  );
};

export default GroupDetailCard;
