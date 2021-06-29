import * as axios from "axios";

const instanse = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});

export const getCountries = () => {
  return instanse.get("all").then((response) => response.data);
};
