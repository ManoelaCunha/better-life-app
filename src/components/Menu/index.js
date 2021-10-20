import { MenuContainer, LogoutContainer, IconsContainer, ImageContainer } from "./style";
import { MdGroups } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Button";
import Logo from "../../assets/img/logo.png";
import { useHistory, useLocation } from "react-router-dom";

const Menu = ({ handleAdd, setAuthenticated }) => {
  const history = useHistory();
  const location = useLocation();

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
        <img alt='logo' src={Logo} />
      </ImageContainer>

      <MenuContainer>
        <IconsContainer>
          {location.pathname === "/dashboard" ? (
            <span onClick={() => sendTo("/dashboard")}>
              <FaHeartbeat style={highlightStyle} />
              <p style={highlightStyle}>Hábitos</p>
            </span>
          ) : (
            <span onClick={() => sendTo("/dashboard")}>
              <FaHeartbeat />
              <p>Hábitos</p>
            </span>
          )}

          {location.pathname === "/groups" ? (
            <span onClick={() => sendTo("/groups")}>
              <MdGroups style={highlightStyle} />
              <p style={highlightStyle}>Grupos</p>
            </span>
          ) : (
            <span onClick={() => sendTo("/groups")}>
              <MdGroups />
              <p>Grupos</p>
            </span>
          )}
        </IconsContainer>

        <Button text='+' smaller onClick={handleAdd} />

        <LogoutContainer>
          <span onClick={handleLogout}>
            <BiLogOutCircle />
            <p>Sair</p>
          </span>
        </LogoutContainer>
      </MenuContainer>
    </>
  );
};

export default Menu;
