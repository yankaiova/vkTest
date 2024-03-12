import { SimpleCell, Title } from "@vkontakte/vkui";
import styles from "./index.module.css";
import { FC } from "react";
import { PropGroup } from "../models/types";

export const GroupItem: FC<PropGroup> = ({ group, handleClick }) => {
  return (
    <div className={styles.groupItem}>
      <div
        className={styles.groupImg}
        style={{ backgroundColor: group.avatar_color }}
      ></div>
      <div>
        <SimpleCell subtitle={group.closed ? "Закрытая" : "Открытая"}>
          <Title level="3" weight="1">
            {group.name}
          </Title>
        </SimpleCell>
        <SimpleCell>Количество подписчиков: {group.members_count}</SimpleCell>
        {group.friends && (
          <SimpleCell onClick={handleClick}>
            Друзья: {group.friends?.length}
          </SimpleCell>
        )}
      </div>
    </div>
  );
};
