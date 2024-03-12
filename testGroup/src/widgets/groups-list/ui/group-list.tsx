import { FC, useEffect, useState } from "react";
import { groups, GroupItem, IGroup, UserItem, IUser } from "../../../entities";
import { observer } from "mobx-react-lite";
import { Modal } from "../../../shared";

export const GroupList: FC = observer(() => {
  const [openGroup, setOpenGroup] = useState<IGroup>();
  useEffect(() => {
    groups.getDataOfGroups();
  }, []);
  return (
    <>
      {groups.draft.map((item: IGroup) => (
        <div key={item.id}>
          <GroupItem
            group={item}
            key={item.id}
            handleClick={() => setOpenGroup(item)}
          />
          {item === openGroup && (
            <Modal key={item.id}>
              {item.friends &&
                item.friends.map((item: IUser) => <UserItem item={item} />)}
            </Modal>
          )}
        </div>
      ))}
    </>
  );
});
