import { IUser } from "../../index";
export interface IGroup {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: IUser[];
}
export type PropGroup = {
  group: IGroup;
  handleClick: () => void;
};
