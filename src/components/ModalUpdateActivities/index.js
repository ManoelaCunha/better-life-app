import Modal from "../../components/Modal";
import Button from "../../components/Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";

import { TextField } from "@material-ui/core";
import { Title } from "@material-ui/icons";

import { ActivitiesContext } from "../../providers/Activities";

const ModalUpdateActivities = ({
  index,
  activityId,
  modalActivityUpdate,
  setModalActivityUpdate,
}) => {
  const { updateActivity } = useContext(ActivitiesContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdateActivities = (data) => {
    updateActivity(data, activityId, index);
    setModalActivityUpdate(false);
    reset(updateActivity);
  };

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "gray",
  };

  return (
    <>
      <Modal
        modalIsOpen={modalActivityUpdate}
        setIsOpen={setModalActivityUpdate}
        title="Atualizar Atividade"
        content={
          <form
            style={formStyle}
            onSubmit={handleSubmit(handleUpdateActivities)}
          >
            <TextField
              label="Título"
              variant="filled"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
              InputProps={{
                endAdornment: <Title style={iconStyle} />,
              }}
            />

            <TextField
              type="datetime-local"
              variant="filled"
              style={inputStyle}
              {...register("realization_time")}
              helperText={errors.realization_time?.message}
            />

            <Button
              text="Atualizar"
              style={{ width: "150px", fontSize: "16px" }}
              type="submit"
            />
          </form>
        }
      />
    </>
  );
};

export default ModalUpdateActivities;
