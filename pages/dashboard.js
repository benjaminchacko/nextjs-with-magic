import { useEffect, useContext } from "react";
import Router from "next/router";
import { UserContext } from "../lib/UserContext";
import Loading from "../components/loading";

const Dashboard = () => {
  const [user] = useContext(UserContext);


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
