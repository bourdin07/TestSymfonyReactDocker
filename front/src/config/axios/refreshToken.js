import Axios from "axios";
import {
  // store,
  services
} from "../..";
import { environnement } from "../environnement/environnement";
// import { errorNotification } from "../../notifications/errorNotification/errorNotification";

export const refreshToken = () => {
  const axios = Axios.create({
    baseURL: `${environnement.baseURL}`,
    withCredentials: true,
  });

  //Response interceptor
  axios.interceptors.response.use(
    (response) => {
      sessionStorage.setItem("token", response.data.token);
      return response;
    },
    (error) => {
      console.error("Error on refresh token", error.response);
      sessionStorage.clear();
      // store.dispatch({ type: "DISCONNECT" });

      if (error.response) {
        // errorNotification(error.response.data.message);
        throw error.response.data;
      } else {
        // errorNotification("Unexpected error");
        throw error;
      }
    }
  );
  return axios;
};


//Création d'une classe pour gérer le refresh token lorsqu'on envoie plusieurs requêtes d'un coup. Classe utilisé dans l'intercepteur api.js
//A l'instanciation de la classe, la requete du refresh oken sera appelée
export class HandleResfreshToken {
  promise;
  constructor() {
    this.promise = services.authentication.refreshToken();
  }
}
