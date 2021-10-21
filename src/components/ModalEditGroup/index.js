import Modal from "../../components/Modal";
import Button from "../../components/Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";

import { TextField } from "@material-ui/core";

import { GroupsContext } from '../../providers/Groups'


const ModalCreateActivities = ({
  groupId,
  modalEditGroupIsOpen,
  setModalEditGroupIsOpen,
}) => {
  const { editGroup } = useContext(GroupsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório")
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEditGroup = (data) => {
    editGroup(groupId, data);
    reset(editGroup);
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
        modalIsOpen={modalEditGroupIsOpen}
        setIsOpen={setModalEditGroupIsOpen}
        title="Editar Grupo"
        content={
          <form
            style={formStyle}
            onSubmit={handleSubmit(handleEditGroup)}
          >
            <TextField
              label="Título"
              variant="filled"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
            />

            <TextField
              label="Descrição"
              variant="filled"
              style={inputStyle}
              {...register("description")}
              helperText={errors.description?.message}
            />

            <TextField
              label="Categoria"
              variant="filled"
              style={inputStyle}
              {...register("category")}
              helperText={errors.category?.message}
            />

            <Button
              text="Editar grupo"
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
