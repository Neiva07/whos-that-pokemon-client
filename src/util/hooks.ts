import { useState } from "react";

export const useToggle = (state: boolean) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(v => !v);
  const activate = () => setActive(true);
  const disable = () => setActive(false);

  return { active, activate, disable, toggle };
};
