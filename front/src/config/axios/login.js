import Axios from "axios";
import { environnement } from "../environnement/environnement";
import { errorNotification } from "../../notifications/errorNotification/errorNotification";

export const login = () => {
  const axios = Axios.create({
    baseURL: `${environnement.baseURL}`,
    withCredentials: true,
  });

  //Request interceptor
  axios.interceptors.request.use((request) => {
    return request;
  });

  //Response interceptor
  axios.interceptors.response.use(
    (response) => {
      sessionStorage.setItem('token', response.data.token)
      return response;
    },
    (error) => {
      if (!error.response) {
        console.error(error.message);
        errorNotification('Erreur technique');
      } else {
        console.error(error.response.data);
        errorNotification(error.response.data.message);
      }
      throw error.response.data;
    }
  );

  return axios;
};
