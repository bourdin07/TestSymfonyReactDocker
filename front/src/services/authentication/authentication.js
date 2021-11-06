import {
  apiLogin,
  apiLogout,
  apiRefreshToken,
  store,
  // apiResetPassword
} from "../..";

export default class authentication {
  login = (credentials) => {
    return apiLogin.post('/login_check', credentials);
  }

  logout = (credentials = null) => {
    sessionStorage.clear();
    store.dispatch({ type: "DISCONNECT" });
    // sessionStorage.removeItem("token");
    // return apiLogout.post('/logout', credentials);
  }

  // refreshToken = () => {
  //     return apiRefreshToken.get('/token/refresh', { withCredentials: true });
  // }

  // checkToken = (token) => {
  //     return apiResetPassword.post('/password/check-token-validity', {token});
  // }

  // resetPassword = (mail) => {
  //     return apiResetPassword.post('/password/reset', {mail})
  // }

  // changePassword = (token, user) => {
  //     return apiResetPassword.post(`/password/edit/${token}`, user);
  // }
}
