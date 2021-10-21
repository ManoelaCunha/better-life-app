import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ButtonContainer } from "../Button/style";

import Button from "../../components/Button";
import ModalUpdateActivities from "../ModalUpdateActivities";
import ModalAlert from "../Modal";

const ActivityCard = ({
  activity,
  activityId,
  isSubscribed,
  removeActivity,
  index,
}) => {
  const [modalActivityUpdate, setModalActivityUpdate] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);

  const { id, title, realization_time } = activity;

  const date = new Date(realization_time);
  const newDate = [date.getDate(), date.getMonth(), date.getFullYear()].join(
    "/"
  );

  const openModalActivityUpdate = () => {
    setModalActivityUpdate(true);
  };

  const openModalAlert = () => {
    setModalAlert(true);
  };

  return (
    <>
      <li key={id}>
        <h4>{title}</h4>
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
          <TiDelete
            onClick={() => openModalAlert()}
            className="closeActivity"
          />
        )}
        <hr style={{ opacity: 0.2, margin: "5px" }} />
      </li>

      <ModalAlert
        modalIsOpen={modalAlert}
        setIsOpen={setModalAlert}
        content={
          <div>
            <h3>Voçe quer excluir esta Atividade?</h3>
            <Button
              text="Excluir"
              style={{ width: "150px", fontSize: "16px" }}
              onClick={() => {
                removeActivity(id);
              }}
            />
          </div>
        }
      />

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
