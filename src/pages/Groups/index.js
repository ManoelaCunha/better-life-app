import { ButtonContainer } from "../../components/Button/style";
import GroupList from "../../components/GroupsList";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import { Box, Container, Text, CloseModal, ModalContent } from "./style";
import { TextField, FormControl } from "@material-ui/core";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Groups = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { handleCreateGroup } = useContext(GroupsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(yupResolver(schema));

  const createGroup = ({ title, description, category }) => {
    const newGroup = {
      title: title,
      description: description,
      category: category,
    };
    handleCreateGroup(newGroup);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80%",
      maxWidth: "500px",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      borderRadius: "15px",
    },
  };

  const formStyle = {
    width: "100%",
  };
  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "500px",
  };

  return (
    <>
      <Menu />
      <Container>
        <Text>
          Bem vinda(o) de volta, <strong>Stefani Wong</strong>
        </Text>
        <Box>
          <h1>GRUPOS</h1>
          <ButtonContainer style={{ margin: "0px 5px" }}>
            <button
              style={{
                width: "150px",
                background: "transparent",
                color: "#000000",
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
        <GroupList />
      </Container>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
        <CloseModal onClick={closeModal}>
          <FaWindowClose />
        </CloseModal>
        <ModalContent>
          <h2>Cadastrar novo grupo</h2>

          <form style={formStyle} onSubmit={handleSubmit(createGroup)}>
            <TextField label='Título' variant='filled' style={inputStyle} {...register("title")} helperText={errors.title?.message} />

            <TextField label='Descrição' variant='filled' style={inputStyle} {...register("description")} helperText={errors.description?.message} />

            <TextField label='Categoria' variant='filled' style={inputStyle} {...register("category")} helperText={errors.category?.message} />

            <Button text='Criar grupo' style={{ width: "150px", fontSize: "16px" }} type='submit' />
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Groups;
