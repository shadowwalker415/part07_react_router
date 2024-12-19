import { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { getUsers } from "../services/users";

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

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        setUsers([]);
      });
  }, []);

  return users;
};

export const useMatchUrl = (path, list) => {
  const [value, setValue] = useState("");
  const match = useMatch(path, list);
  useEffect(() => {
    const matchedValue = match
      ? list.find((object) => object.id === match.params.id)
      : null;
    if (matchedValue !== value) setValue(matchedValue);
  }, [value, list, match]);
  return value;
};
