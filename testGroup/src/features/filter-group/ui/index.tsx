import { FormItem, RadioGroup } from "@vkontakte/vkui";
import { RadioButton } from "../../../shared";
import { FC, useState } from "react";
import { Filter } from "../model/types";
export const FilterItem: FC<Filter> = ({ options, title, onClick }) => {
  const [check, setCheck] = useState<string>(options[0]);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.value);
    onClick(e.target.value);
  };
  return (
    <FormItem top={title}>
      <RadioGroup>
        {options.map((item: string) => (
          <RadioButton
            checked={item === check}
            value={item}
            name={title}
            key={item}
            onChange={handleClick}
          />
        ))}
      </RadioGroup>
    </FormItem>
  );
};
