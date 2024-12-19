import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    return setValue(event.target.value);
  };

  const clearField = () => {
    return setValue("");
  };

  return {
    type,
    value,
    onChange,
    clearField,
  };
};
