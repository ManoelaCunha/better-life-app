import { ButtonContainer } from "../../components/Button/style";
import { Box, Container, SelectDiv, Text } from "./style";

import GroupList from "../../components/GroupsList";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Menu from "../../components/Menu";
import { GroupsContext } from "../../providers/Groups";
import { UserContext } from "../../providers/User";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import AsideRight from "../../components/AsideRight";
import { Filter, MenuItemCustom, FormControlCustom } from '../../styles/styleMaterial'


const Groups = ({ authenticated, setAuthenticated }) => {
  const { userName } = useContext(UserContext);
  const { createGroup } = useContext(GroupsContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('subscribed');

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateGroup = (data) => {
    createGroup(data);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <Menu setAuthenticated={setAuthenticated} handleAdd={openModal} />
      <Container>

        <Text>
          Bem vinda(o) de volta, <strong>{userName}</strong>
        </Text>

        <Box>
          <h1>GRUPOS</h1>
          <ButtonContainer style={{ margin: "0px 5px" }}>
            <button
              style={{
                width: "150px",
                background: "transparent",
                color: "#000",
                fontWeight: "500",
                boxShadow: "none",
                fontSize: "20px",
                fontFamily: "Montserrat",
                textAlign: "right",
              }}
              onClick={openModal}
            >
              + Novo Grupo
            </button>
          </ButtonContainer>
        </Box>
        <SelectDiv>
          <FormControlCustom variant='outlined'>
            <Filter
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterValue}
              label="Filtro"
              onChange={handleChange}
            >
              <MenuItemCustom value={"subscribed"} >Inscrito</MenuItemCustom>
              <MenuItemCustom value={"notSubscribed"}>Não inscrito</MenuItemCustom>
              <MenuItemCustom value={"all"}>Todos</MenuItemCustom>
            </Filter>
          </FormControlCustom>

        </SelectDiv>
        <GroupList filterValue={filterValue} />
      </Container>
      <AsideRight />
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title="Cadastrar novo grupo"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleCreateGroup)}>
            <TextField
              label="Nome"
              variant="filled"
              style={inputStyle}
              {...register("name")}
              helperText={errors.name?.message}
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

export default Groups;
