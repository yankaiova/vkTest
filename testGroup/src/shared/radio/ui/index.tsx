import { Radio } from "@vkontakte/vkui";
import { FC } from "react";
import { RadioProps } from "@vkontakte/vkui";
export const RadioButton: FC<RadioProps> = ({
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <Radio name={name} value={value} checked={checked} onChange={onChange}>
      {value}
    </Radio>
  );
};
