import { useCallback, useState } from "react";

export function useToggle(initialValue = false) {
  const [isVisible, setVisible] = useState(initialValue);
  const toggleVisible = useCallback((value = null) => {
    if (value) {
      setVisible(value);
    } else {
      setVisible(!isVisible);
    }
  });
  return [isVisible, toggleVisible];
}
