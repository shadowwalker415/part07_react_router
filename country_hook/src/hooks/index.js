import axios from "axios";
import { useState, useEffect } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  let baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/name/${name.toLowerCase()}`;

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setCountry({ found: true, data: { ...response.data } });
      })
      .catch((err) => {
        err.status === 404 && setCountry(null);
      });
  }, [baseUrl]);
  if (name.length === 0) return null;
  if (!country) return { found: false, data: undefined };
  return country;
};
