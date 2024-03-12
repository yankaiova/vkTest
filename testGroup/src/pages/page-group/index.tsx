import { Group } from "@vkontakte/vkui";
import { GroupList } from "../../widgets";
import { FilterListGroup } from "../../widgets/filter-list/ui";

export const Page = () => {
  return (
    <Group>
      <FilterListGroup />
      <GroupList />
    </Group>
  );
};
