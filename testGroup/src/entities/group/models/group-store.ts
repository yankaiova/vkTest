import { makeAutoObservable, runInAction } from "mobx";
import { IGroup } from "./types";
import { mockData } from "./data";
const delay = () => new Promise((res) => setTimeout(res, 1000));

export class GroupStore {
  initial: IGroup[] = [];
  draft: IGroup[] = [];
  isClosed: string = "";
  isColor: string = "";
  isFriends: string = "";
  constructor() {
    makeAutoObservable(this);
  }

  getDataOfGroups = async () => {
    await delay()
      .then((res) => {
        if (res === 0) {
          throw new Error("Error, result 0");
        }
        if (!mockData) {
          throw new Error("Error");
        }

        const data = mockData;
        runInAction(() => {
          this.draft = data;
          this.initial = data;
        });
      })
      .catch((error) => console.log(error));
  };

  filterFriends() {
    this.draft = this.draft.filter(
      (item: IGroup) =>
        (this.isFriends === "true" && "friends" in item) ||
        (this.isFriends === "false" && !("friends" in item)) ||
        this.isFriends === "all"
    );
  }
  filterColor() {
    this.draft = this.draft.filter(
      (item: IGroup) =>
        item.avatar_color?.includes(this.isColor) || this.isColor === "any"
    );
  }
  filterPrivate() {
    this.draft = this.draft.filter(
      (item: IGroup) =>
        (item.closed && this.isClosed == "closed") ||
        (!item.closed && this.isClosed == "opened") ||
        this.isClosed === "all"
    );
  }
  filter() {
    this.draft = this.initial;
    if (this.isClosed) {
      this.filterPrivate();
    }
    if (this.isColor) {
      this.filterColor();
    }
    if (this.isFriends) {
      this.filterFriends();
    }
    return this.draft;
  }

  setIsClosed(option: string) {
    this.isClosed = option;
    this.filter();
  }
  setColor(option: string) {
    this.isColor = option;
    this.filter();
  }
  setFreinds(option: string) {
    this.isFriends = option;
    this.filter();
  }
}
export const groups = new GroupStore();
