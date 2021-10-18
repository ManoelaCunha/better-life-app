import Group from "../Group";
import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";

const GroupList = () => {
  const { groups } = useContext(GroupsContext);

  return (
    <>
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </>
  );
};

export default GroupList;
