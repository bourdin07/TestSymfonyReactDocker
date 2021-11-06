import dayjs from "dayjs";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const LoginRedirect = ({ role, user }) => {
  const history = useHistory();

  useEffect(() => {
    switch (role) {
      // case "ROLE_ADMIN":
      //   history.push("/admin/paid-leaves/summary");
      //   break;
      // case "ROLE_RH":
      //   history.push("/paid-leaves");
      //   break;
      // case "ROLE_ASSOC":
      //   history.push("/paid-leaves");
      //   break;
      case "ROLE_USER":
        // if (user.isUsingCra) {
        //   history.push(
        //     `/cra/year/${dayjs().year()}/month/${dayjs().month() + 1}`
        //   );
        // } else {
        //   history.push("/paid-leaves");
        // }
        break;
      // case "ROLE_STAGIAIRE":
      //   history.push("/trombinoscope");
      //   break;
      // case "ROLE_CONSULTATION":
      //   history.push("/users");
      //   break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [role]);

  return <div>LoginRedirect component</div>;
};

const mapStateToProps = (state) => {
  return { role: state.user.roles[0], user: state.user };
};

export default connect(mapStateToProps)(LoginRedirect);
