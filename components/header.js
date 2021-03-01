import { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";
import { CallToAction, TextButton } from "@magiclabs/ui";
import { useTheme } from "next-themes";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const { theme, setTheme } = useTheme();

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push("/login");
    });
  };

  return (
    <header>
      <nav>
        <ul>
          {user?.loading ? (
            // If loading, don't display any buttons specific to the loggedIn state
            <div style={{ height: "38px" }}></div>
          ) : user?.issuer ? (
            <>
              <li>
                <Link href="/">
                  <TextButton color="primary" size="sm">
                    Home
                  </TextButton>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <TextButton color="primary" size="sm">
                    Profile
                  </TextButton>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <TextButton color="primary" size="sm">
                    Dashboard
                  </TextButton>
                </Link>
              </li>
              <li>
                <a>
                  <TextButton color="warning" size="sm" onPress={logout}>
                    Logout
                  </TextButton>
                </a>
              </li>
              <li>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    padding: "0.25rem",
                    marginLeft: "0.25rem",
                    marginRight: "0.25rem",
                  }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    {theme === "dark" ? (
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    )}
                  </svg>
                </button>
              </li>
            </>
          ) : (
            <>
            <li>
                <Link href="/">
                  <TextButton color="primary" size="sm">
                    Home
                  </TextButton>
                </Link>
              </li>
            <li>
                <Link href="/about">
                  <TextButton color="primary" size="sm">
                    About
                  </TextButton>
                </Link>
              </li>
              
              <li>
                <Link href="/login">
                  <CallToAction color="primary" size="sm">
                    Login
                  </CallToAction>
                </Link>
              </li>
              <li>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    padding: "0.25rem",
                    marginLeft: "0.25rem",
                    marginRight: "0.25rem",
                  }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    {theme === "dark" ? (
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    )}
                  </svg>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          max-width: 45rem;
          margin: 0 auto 50px;
          padding: 1.25rem 1.25rem;
          border-bottom: 1px solid #f0f0f0;
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          margin-right: 1.5rem;
          line-height: 38px;
        }
        li:first-child {
          margin-left: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;
