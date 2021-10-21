import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ButtonContainer } from "../Button/style";
import ModalUpdateActivities from "../ModalUpdateActivities";

const ActivityCard = ({
  activity,
  activityId,
  isSubscribed,
  removeActivity,
  index,
}) => {
  const [modalActivityUpdate, setModalActivityUpdate] = useState(false);

  const date = new Date(activity.realization_time);
  const newDate = [date.getDate(), date.getMonth(), date.getFullYear()].join(
    "/"
  );

  const openModalActivityUpdate = () => {
    setModalActivityUpdate(true);
  };

  return (
    <>
      <li key={activity.id}>
        <h4>{activity.title}</h4>
        <p>Data Limite: {newDate}</p>
        <ButtonContainer style={{ margin: "0px" }}>
          {isSubscribed && (
            <button
              onClick={() => {
                openModalActivityUpdate();
              }}
              style={{ width: "130px" }}
            >
              Atualizar Atividade
            </button>
          )}
        </ButtonContainer>
        {isSubscribed && (
          <TiDelete onClick={() => removeActivity(activity.id)} />
        )}
        <hr style={{ opacity: 0.2, margin: "5px" }} />
      </li>

      <ModalUpdateActivities
        index={index}
        activityId={activityId}
        modalActivityUpdate={modalActivityUpdate}
        setModalActivityUpdate={setModalActivityUpdate}
      />
    </>
  );
};

export default ActivityCard;
