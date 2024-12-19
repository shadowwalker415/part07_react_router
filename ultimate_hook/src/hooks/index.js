import { useState, useEffect } from "react";
import axios from "axios";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async (baseUrl) => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (baseUrl, newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (baseUrl, id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getAll, create, update, setToken };

export const useResource = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll(url).then((data) => {
      data && setData(data);
    });
  }, [url]);

  const service = {
    getAll: () => getAll(url).then((data) => setData(data)),
    create: (object) =>
      create(url, object).then((created) => {
        setData((prevData) => [...prevData, created]);
      }),
    update: (id, newObject) =>
      update(url, id, newObject).then((updatedObject) => {
        setData((prevData) =>
          prevData.map((item) => {
            item.id === id ? updatedObject : item;
          })
        );
      }),
    setToken,
  };

  return [data, service];
};

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    return setValue(event.target.value);
  };

  return { type, value, onChange };
};
