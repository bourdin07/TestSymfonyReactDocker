import Axios from "axios";
import { environnement } from "../environnement/environnement";
import { store } from "../..";

export const logout = () => {
  const axios = Axios.create({
    baseURL: `${environnement.baseURL}`,
    withCredentials: true,
  });

  //Request interceptor
  axios.interceptors.request.use((request) => {
    let _request = {
      ...request, headers: {
        ...request.headers,
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    }
    sessionStorage.clear();
    dispatch({type: `DISCONNECT`});
    return _request
  });

  //Response interceptor
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error("Error logout", error);
      if(error.response) throw error.response.data;
    }
  );

  return axios;
};

const dispatch = (action) => {
  store.dispatch(action);
};
