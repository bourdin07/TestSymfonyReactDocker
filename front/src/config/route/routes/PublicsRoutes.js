import React from 'react'
import { Route, Switch, Redirect } from 'react-router';
import Login from '../../../components/authentication/Login/Login';
// import EditPassword from '../../../components/authentication/EditPassword/EditPassword';
import { content } from '../../../components/layout/content/content';
// import ResetPassword from '../../../components/authentication/ResetPassword/ResetPassword';


const publicRoutes = [
  // { path: `/edit-password/:token`, component: EditPassword, exact: true, title: 'Modification du mot de passe' },
  // { path: `/reset-password`, component: ResetPassword, exact: true, title: 'Réinitialisation mot de passe' },
  { path: `/`, component: Login, exact: true, title: `Identifiez-vous pour accéder à l'Intranet` },
]

const PublicRoutes = ({ role }) => {
  return (
    <div className={'Login-body'}>
      <Switch>
        {publicRoutes.map((route, index) => {
          return <Route path={route.path} exact={route.exact} component={content(route.component, route.title, { maxWidth: '500px', margin: 'auto' })} key={index} />
        })}
        <Route component={() => <Redirect to={'/'} />} />
      </Switch>
    </div>
  )
}


export default PublicRoutes;
