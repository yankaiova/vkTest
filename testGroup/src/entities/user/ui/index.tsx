import { SimpleCell } from "@vkontakte/vkui";
import { IUser } from "../model/types";
type PropFriends = {
  item: IUser;
};
export const UserItem = ({ item }: PropFriends) => {
  return (
    <SimpleCell>
      {item.first_name} {item.last_name}
    </SimpleCell>
  );
};
