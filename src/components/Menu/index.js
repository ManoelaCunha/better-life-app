import {
  MenuContainer,
  LogoutContainer,
  IconsContainer,
  ImageContainer,
} from "./style";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import Button from "../Button";
import Logo from "../../assets/img/logo.png";
import { useHistory, useLocation } from "react-router-dom";
import ModalAlert from "../Modal";
import { useState } from "react";

const Menu = ({ handleAdd, setAuthenticated }) => {

  const [modalAlert, setModalAlert] = useState(false);

  const history = useHistory();
  const location = useLocation();


  const openModalAlert = () => {
    setModalAlert(true);

  };

  const handleLogout = () => {
    history.push("/");
    setAuthenticated(false);
    localStorage.clear();
  };

  const sendTo = (path) => {
    history.push(path);
  };


  const highlightStyle = {
    color: "#587efc",
    fontWeight: "bold",
  };

  return (
    <>
      <ImageContainer>
        <img alt="logo" src={Logo} />
      </ImageContainer>
      <MenuContainer>
        <ImageContainer className = "active">
          <img alt="logo" src={Logo} />
        </ImageContainer>
        <IconsContainer>
          {location.pathname === "/dashboard" ? (
            <span onClick={() => sendTo("/dashboard")}>
              <BsHeart style={highlightStyle} />
              <p style={highlightStyle}>Hábitos</p>
            </span>
          ) : (
            <span onClick={() => sendTo("/dashboard")}>
              <BsHeart />
              <p>Hábitos</p>
            </span>
          )}

          {location.pathname.includes("/groups") ? (
            <span onClick={() => sendTo("/groups")}>
              <AiOutlineUsergroupAdd style={highlightStyle} />
              <p style={highlightStyle}>Grupos</p>
            </span>
          ) : (
            <span onClick={() => sendTo("/groups")}>
              <AiOutlineUsergroupAdd />
              <p>Grupos</p>
            </span>
          )}
        </IconsContainer>

        <Button text="+" smaller onClick={handleAdd} />

      <ModalAlert
        modalIsOpen={modalAlert}
        setIsOpen={setModalAlert}
        content={
          <div>
            <h3>Você deseja realmente sair?</h3>
            <Button
              text="Sim, partiu!"
              style={{ width: "150px", fontSize: "16px", marginTop: "25px" }}
              onClick={() => {
                handleLogout();
              }}
            />
          </div>
        }
      />
        <LogoutContainer>
          <span onClick={openModalAlert}>
            <IoIosLogOut />
            <p> Sair</p>
          </span>
        </LogoutContainer>
      </MenuContainer>
    </>
  );
};

export default Menu;
