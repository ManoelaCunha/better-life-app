import Group from "../Group";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/Groups";
import InfiniteScroll from "react-infinite-scroll-component";

const GroupList = () => {
  const { groups } = useContext(GroupsContext);
  const [hasMore, setHasMore] = useState(true);
  const [lastGroupItem, setLastGroupItem] = useState(5);
  const [displayGroups, setDisplayGroups] = useState(groups.slice(0, lastGroupItem))

  const fetchMoreData = () => {
    if (lastGroupItem >= groups.length) {
      setHasMore(false);
      return;
    }
    setLastGroupItem(lastGroupItem + 20);
  };

  useEffect(() => {
    setDisplayGroups(groups.slice(0, lastGroupItem))
  }, [lastGroupItem, groups]);

  return (
    <>
      <InfiniteScroll
        dataLength={displayGroups.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Carregando...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Não há mais grupos.</b>
          </p>
        }
      >
        {displayGroups.map((group) => (
          <Group key={group.id} group={group} groupId={group.id} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default GroupList;
