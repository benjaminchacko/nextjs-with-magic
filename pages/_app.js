import { useState, useEffect } from "react";
import { UserContext } from "../lib/UserContext";
import { magic } from "../lib/magic";
import Layout from "../components/layout";

import { ThemeProvider as DarkModeProvider } from "next-themes";
import { ThemeProvider } from "@magiclabs/ui";

import "@magiclabs/ui/dist/cjs/index.css";
import "../components/assets/css/app.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, set it to {user: null}
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);

  return (
    <DarkModeProvider>
      <ThemeProvider>
        <UserContext.Provider value={[user, setUser]}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
