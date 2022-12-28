import { createContext, useContext, useMemo, useState } from "react";
import { useToggle } from "./hooks";

const Context = createContext();
const FormProvider = ({ children }) => {
  const [isValid, setIsValid] = useState(false);
  const [isVisible, handleToggle] = useToggle(false);
  const validate = (fields) => {
    const errors = [];
    Object.entries(fields).map(([key, value]) => {
      if (!value) {
        errors.push(key);
      }
    });

    return setIsValid(!errors.length);
  };
  const value = useMemo(
    () => ({ validate, isValid, isVisible, handleToggle }),
    [isValid, isVisible]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export function useFormValidation() {
  return useContext(Context);
}
export default FormProvider;
