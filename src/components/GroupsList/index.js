import Group from "../Group";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/Groups";

const GroupList = ({ filterValue }) => {
  const { groups, subscribedGroups } = useContext(GroupsContext);
  const [filteredGroups, setFilteredGroups] = useState([]);


  useEffect(() => {
    let newGroups = groups;
    if (filterValue === 'subscribed') {
      newGroups = groups.filter((group) => subscribedGroups.includes(group.id))
    }
    if (filterValue === 'notSubscribed') {
      newGroups = groups.filter((group) => !subscribedGroups.includes(group.id))
    }
    setFilteredGroups(newGroups)
  }, [groups, filterValue, subscribedGroups]);



  return (
    <>
      {filteredGroups.map((group) => (
        <Group key={group.id} group={group} groupId={group.id} />
      ))}
    </>
  );
};

export default GroupList;
