import { FormLayoutGroup } from "@vkontakte/vkui";
import { groups, COLORS } from "../../../entities";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { FilterItem } from "../../../features";
export const FilterListGroup: FC = observer(() => {
  return (
    <FormLayoutGroup>
      <FilterItem
        title={"Приватность"}
        onClick={(value) => groups.setIsClosed(value)}
        options={["all", "closed", "opened"]}
      />
      <FilterItem
        title={"Цвет"}
        onClick={(value) => groups.setColor(value)}
        options={COLORS}
      />
      <FilterItem
        title={"Друзья"}
        onClick={(value) => groups.setFreinds(value)}
        options={["all", "true", "false"]}
      />
    </FormLayoutGroup>
  );
});
