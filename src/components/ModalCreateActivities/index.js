import Modal from "../../components/Modal";
import Button from "../../components/Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";

import { TextField } from "@material-ui/core";

import { ActivitiesContext } from "../../providers/Activities";

const ModalCreateActivities = ({
  groupId,
  modalActivityIsOpen,
  setModalActivityIsOpen,
}) => {
  const { createActivities } = useContext(ActivitiesContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateActivities = (data) => {
    data["group"] = Number(groupId);
    createActivities(data);
  };

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

  return (
    <>
      <Modal
        modalIsOpen={modalActivityIsOpen}
        setIsOpen={setModalActivityIsOpen}
        title="Cadastrar Nova Atividade"
        content={
          <form
            style={formStyle}
            onSubmit={handleSubmit(handleCreateActivities)}
          >
            <TextField
              label="Título"
              variant="filled"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
            />

            <TextField
              type="datetime-local"
              variant="filled"
              style={inputStyle}
              {...register("realization_time")}
              helperText={errors.realization_time?.message}
            />

            <Button
              text="Criar Atividade"
              style={{ width: "150px", fontSize: "16px" }}
              type="submit"
            />
          </form>
        }
      />
    </>
  );
};

export default ModalCreateActivities;
