import React from "react";
import Axios from "axios";
import { environnement } from "../environnement/environnement";
import {
  // store,
  services
} from "../..";
// import { errorNotification } from "../../notifications/errorNotification/errorNotification";
import { HandleResfreshToken } from "./refreshToken";
// import NotificationHtml from "../../notifications/NotificationHtml";

export const api = () => {

  let refreshTokenPromise = null;
  let tryRequest = 0;

  const axios = Axios.create({
    baseURL: `${environnement.baseURL}`,
    withCredentials: true,
  })

  //Request interceptor
  axios.interceptors.request.use(request => {
    let _request = {
      ...request, headers: {
        ...request.headers,
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    }
    return _request;
  })

  //Response interceptor
  axios.interceptors.response.use(
    response => {
      //Si on détecte un retour de type liste paginé avec un champ pageSize, on le stock dans le sessionStorage
      if (response.data.pageSize !== undefined && response.data.pageSize !== null && response.data.pageSize !== 0) {
        sessionStorage.setItem('pageSize', response.data.pageSize);
      }
      return response.data;
    },
    error => {
      let messages;
      if (!error.response) {
        messages = error.message.split('\n');
        if (messages.length > 1) {
          // errorNotification(<NotificationHtml message={messages} />);
        } else {
          // errorNotification(error.message);
        }
        throw error.message
      } else {
        if (error.response.status !== 401) {
          if (error.response.data instanceof Blob) {
            const fileReader = new FileReader();
            fileReader.readAsText(error.response.data);
            fileReader.onload = () => {
              const content = JSON.parse(fileReader.result);
              // errorNotification(content.message);
            };
            fileReader.onerror = function () {
              // errorNotification(fileReader.error);
            };
          } else {
            if (error.response.data.message) {
              messages = error.response.data.message.split('\n');
            } else {
              console.error(error.response.data);
              messages = ['Erreur technique'];
            }
            // errorNotification(<NotificationHtml message={messages} />);
          }
          throw error
        } else {
          const originalReq = error.config;
          originalReq._retry = true;

          if (refreshTokenPromise === null) {
            refreshTokenPromise = new HandleResfreshToken()
          }

          if (tryRequest > 3) {
            tryRequest = 0;
            sessionStorage.clear();
            // store.dispatch({ type: 'DISCONNECT' });
            // errorNotification('Authentication error');
            return;
          } else {
            tryRequest++;
            return refreshTokenPromise.promise
              .then(response => {
                refreshTokenPromise = null;
                return axios(originalReq);
              });
          }



        };
      }
    }
  );

  return axios;

}
