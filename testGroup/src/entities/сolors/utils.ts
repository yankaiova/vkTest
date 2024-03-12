import { mockData } from "../group/models/data";
const dataOfColor = Array.from(
  new Set(mockData.map((item) => item.avatar_color))
);
export const COLORS = dataOfColor.filter((item) => item);
COLORS.push("any");
