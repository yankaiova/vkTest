import { Button, Group } from "@vkontakte/vkui";
import { useState } from "react";
type PropModal = {
  children: React.ReactNode;
};
export const Modal = ({ children }: PropModal) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      {open && (
        <Group>
          {children}
          <Button onClick={() => setOpen(false)}>Закрыть</Button>
        </Group>
      )}
    </>
  );
};
