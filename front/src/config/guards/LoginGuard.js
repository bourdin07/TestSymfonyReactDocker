import React from 'react';
import { connect } from 'react-redux';
import PublicRoutes from '../route/routes/PublicsRoutes';


export const LoginGuard = ({ children, username, byPassLogin }) => {
  // console.log(children)
  console.log(username);
  return username || byPassLogin ? children : <PublicRoutes myProp={"value"} />;
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  }
}

export default connect(mapStateToProps)(LoginGuard);
