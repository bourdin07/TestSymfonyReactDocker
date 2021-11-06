import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { content } from '../../components/layout/content/content';

const RoleGuard = ({ routes, userRoles }) => {

  //Check if the on of userRoles (from redux) is in route.role to give access
  const checkRole = (route) => {
    try {
      return [].concat(route.roles).some(requiredRole => [].concat(userRoles).filter(role => role === requiredRole));
    } catch (error) {
      return routes;
    }
  }

  return (
    <Switch>
      {
        routes
          .filter(route => checkRole(route))
          .map((route, index) => {
            return <Route path={route.path} exact={route.exact} component={content(route.component, route.title)} key={index} />
          })
      }
    </Switch>
  );

}

const mapStateToProps = (state) => {
  return { userRoles: state.user.roles }
}

export default connect(mapStateToProps)(RoleGuard);
