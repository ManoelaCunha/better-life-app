import Group from "../Group";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/Groups";
import InfiniteScroll from "react-infinite-scroll-component";

const GroupList = ({ filterValue }) => {
  const { groups, subscribedGroups } = useContext(GroupsContext);
  const [filteredGroups, setFilteredGroups] = useState([]);


  useEffect(() => {
    let newGroups = groups;
    if (filterValue === 'subscribed') {
      newGroups = groups.filter((group) => subscribedGroups.includes(group.id))
      console.log(newGroups)
    }
    if (filterValue === 'notSubscribed') {
      newGroups = groups.filter((group) => !subscribedGroups.includes(group.id))
      console.log(newGroups)
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
