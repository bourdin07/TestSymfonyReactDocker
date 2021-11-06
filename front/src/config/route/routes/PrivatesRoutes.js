import { connect } from "react-redux";
import LoginRedirect from "../../../components/authentication/LoginRedirect/LoginRedirect";
import PageNotFound from "../../../components/layout/PageNotFound/PageNotFound";
import RoleGuard from "../../guards/RoleGuard";

//// List of components
// import user from './user/user';

export const routes = [
  // ...user,
  { path: `/`, component: LoginRedirect, roles: ['ROLE_ADMIN', 'ROLE_USER'], title: "Page d'accueil", exact: true },
  { path: `*`, component: PageNotFound, roles: ['ROLE_ADMIN', 'ROLE_USER'], exact: false, title: 'Page introuvable' },
]

const PrivatesRoutes = ({ role }) => {
    return <RoleGuard routes={routes} />
}

const mapStateToProps = (state) => {
    try {
      return {role: state.user.roles[0]};
    } catch (error) {
      return {};
    }
};

export default connect(mapStateToProps)(PrivatesRoutes);
