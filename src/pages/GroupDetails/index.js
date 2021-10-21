import Menu from "../../components/Menu";
import GroupDetailCard from "../../components/GroupDetailCard";
import Button from "../../components/Button";

import { UserContext } from "../../providers/User";

import { useContext, useState } from "react";
import { useParams, Redirect } from "react-router";

import { Box, Container, Text } from "./style";
import Modal from "../../components/Modal";
import { TextField } from "@material-ui/core";
import { Title, Description, Category } from "@material-ui/icons";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GroupsContext } from "../../providers/Groups";

const GroupDetails = ({ authenticated, setAuthenticated }) => {
  const { userName } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { createGroup } = useContext(GroupsContext);

  const parameters = useParams();
  const groupId = parameters.idGroup;

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateGroup = (data) => {
    createGroup(data);
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
    reset();
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

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu setAuthenticated={setAuthenticated} handleAdd={openModal} />
      <Container>
        <Text>
          Bem vinda(o) de volta, <strong>{userName}</strong>
        </Text>
        <Box>
          <h1>Detalhes do Grupo</h1>
        </Box>
        <GroupDetailCard groupId={groupId} authenticated={authenticated} />
      </Container>

      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        title="Cadastrar Novo Grupo"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleCreateGroup)}>
            <TextField
              label="Nome"
              variant="filled"
              style={inputStyle}
              {...register("name")}
              helperText={errors.name?.message}
              InputProps={{
                endAdornment: <Title style={iconStyle} />,
              }}
            />

            <TextField
              label="Descrição"
              variant="filled"
              style={inputStyle}
              {...register("description")}
              helperText={errors.description?.message}
              InputProps={{
                endAdornment: <Description style={iconStyle} />,
              }}
            />

            <TextField
              label="Categoria"
              variant="filled"
              style={inputStyle}
              {...register("category")}
              helperText={errors.category?.message}
              InputProps={{
                endAdornment: <Category style={iconStyle} />,
              }}
            />

            <Button
              text="Criar grupo"
              style={{ width: "150px", fontSize: "16px" }}
              type="submit"
            />
          </form>
        }
      />
    </>
  );
};

export default GroupDetails;
