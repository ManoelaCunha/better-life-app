import Button from "../Button";
import { useContext, useEffect, useState } from "react";

import { CardGroupDetailBody, ActivityContainer, GoalContainer, MembersContainer, GoalContainerTitle, ActivityContainerTitle } from "./style";
import { ButtonContainer } from "../Button/style";

import { GroupsContext } from "../../providers/Groups";
import { GoalsContext } from "../../providers/Goals";
import { ActivitiesContext } from "../../providers/Activities";

import ModalCreateActivities from "../ModalCreateActivities";
import GoalCard from "../GoalCard";
import ActivityCard from "../ActivityCard";
import ModalEditGroup from '../ModalEditGroup';
import CreateGroupGoalModal from "../../components/CreateGroupGoal";

import api from "../../services/api";

const GroupDetailCard = ({ groupId, authenticated }) => {
  const { goals, getGoals } = useContext(GoalsContext);

  const { activities, getActivities, removeActivity } =
    useContext(ActivitiesContext);
  const {
    subscribedGroups,
    subscribeGroup,
    unsubscribeGroup,
    getSubscribedGroups, specificGroup, groups,
  } = useContext(GroupsContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [modalActivityIsOpen, setModalActivityIsOpen] = useState(false);
  const [modalGoalIsOpen, setModalGoalIsOpen] = useState(false);
  const [modalEditGroupIsOpen, setModalEditGroupIsOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState({
    "id": '',
    "name": '',
    "description": "",
    "category": "",
    "creator": {
      "id": '',
      "username": "",
      "email": ""
    },
    "users_on_group": [
    ],
  });

  const getInfoGroup = (id) => {
    api
      .get(`groups/${id}/`)
      .then((resp) => {
        setCurrentGroup(resp.data);
      })
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    if (authenticated) {
      getGoals(groupId);
      getActivities(groupId);
      getSubscribedGroups();
      subscribedGroups.includes(Number(groupId))
        ? setIsSubscribed(true)
        : setIsSubscribed(false);
      getInfoGroup(groupId);
    }

  }, []);


  useEffect(() => {
    if (authenticated) {
      subscribedGroups.includes(Number(groupId))
        ? setIsSubscribed(true)
        : setIsSubscribed(false);
    }
    getInfoGroup(groupId);
  }, [subscribedGroups, groups]);

  const openModalActivity = () => {
    setModalActivityIsOpen(true);
  };

  const openModalGoal = () => {
    setModalGoalIsOpen(true);
  };

  const openEditGroup = () => {
    setModalEditGroupIsOpen(true);
  };
  return (
    <>
      <CardGroupDetailBody>
        <h2>{currentGroup.name}</h2>
        <p> Administrador do Grupo - {currentGroup.name}</p>
        <p>Categoria - {currentGroup.creator.username}</p>
        <ButtonContainer style={{ margin: "0px" }}>
          <div className='alignButton'>
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
            {isSubscribed && <Button
              text={"Editar Grupo"}
              onClick={openEditGroup}
            />
            }
            <ModalEditGroup
              groupId={groupId}
              modalEditGroupIsOpen={modalEditGroupIsOpen}
              setModalEditGroupIsOpen={setModalEditGroupIsOpen}
            />
          </div>
        </ButtonContainer>
        <p>Descrição do Grupo</p>
        <p>{specificGroup.description}</p>

        <hr />
        <div>
          <GoalContainerTitle>
            <h3>Metas</h3>
            <ButtonContainer style={{ margin: "0px" }}>
              {isSubscribed && (
                <button onClick={openModalGoal}><strong>+</strong>    Meta</button>
              )}
            </ButtonContainer>
          </GoalContainerTitle>
          <GoalContainer>
            {goals.map((goal) => (
              <GoalCard goal={goal} key={goal.id} isSubscribed={isSubscribed} />
            ))}
          </GoalContainer>
        </div>

        <hr />
        <div>
          <ActivityContainerTitle>
            <h3>Atividades</h3>
            <ButtonContainer style={{ margin: "0px" }}>
              {isSubscribed && (
                <button onClick={openModalActivity}><strong>+</strong> Atividade</button>
              )}
            </ButtonContainer>
          </ActivityContainerTitle>
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

        <MembersContainer>
          <div>
            <h3>Membros do Grupo</h3>
            <p> {specificGroup.users_on_group.map((user, index) => (
              user.username
            )).join(', ')}</p>
          </div>
        </MembersContainer>

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
