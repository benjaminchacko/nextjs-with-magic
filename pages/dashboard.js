import { useEffect, useContext } from "react";
import Router from "next/router";
import { UserContext } from "../lib/UserContext";
import Loading from "../components/loading";

import { useTheme } from "next-themes";

const Dashboard = () => {
  const [user] = useContext(UserContext);
  const { theme, setTheme } = useTheme();

  // Redirect to /login if not loading and no user found
  useEffect(() => {
    user && !user.loading && !user.issuer && Router.push("/login");
  }, [user]);

  return (
    <>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            The current theme is: {theme}
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>
            <div className="label">Welcome to your Dashboard!!!</div>
            <div className="profile-info">{user.email}</div>
            <div className="label">User Id</div>
            <div className="profile-info">{user.issuer}</div>
          </>
        )
      )}
    </>
  );
};

export default Dashboard;
