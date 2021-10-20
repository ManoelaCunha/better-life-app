import { ButtonContainer } from "../Button/style";
import { Box, Card } from "./style";

import img from "../../assets/img/star.gif";

import { GroupsContext } from "../../providers/Groups";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

const Group = ({ group, groupId }) => {
  const { name, category, description } = group;
  const { subscribedGroups, subscribeGroup } = useContext(GroupsContext);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    subscribedGroups.includes(groupId) ? setIsSubscribed(true) : setIsSubscribed(false);
  }, [])

  useEffect(() => {
    subscribedGroups.includes(groupId) ? setIsSubscribed(true) : setIsSubscribed(false);
  }, [subscribedGroups, groupId])


  const history = useHistory();
  const handleSubscribeGroup = () => {
    subscribeGroup(groupId);
  };

  return (
    <Card>
      <div>
        <h2>{name}</h2>
        <p>
          <strong>Categoria</strong> - {category}
        </p>

        <p>
          <strong>Descrição</strong> - {description}
        </p>

        <ButtonContainer style={{ margin: "15px" }}>
          <button
            onClick={() => {
              history.push(`/groups/${groupId}`)
            }}
            style={{
              width: "130px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "5px",
            }}
          >
            Ver mais
          </button>

          {!isSubscribed && <button
            onClick={handleSubscribeGroup}
            style={{
              width: "130px",
              height: "30px",
            }}
          >
            Inscreva-se
          </button>}
        </ButtonContainer>
      </div>
      <Box>
        <img src={img} alt="Animated icons by Lordicon.com" />
      </Box>
    </Card>
  );
};

export default Group;
