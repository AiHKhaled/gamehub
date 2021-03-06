import netlifyIdentity from "netlify-identity-widget";
import { createContext } from "react";
import { useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authready, setAuthready] = useState(false);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthready(true);
      console.log("init event");
    });

    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };
  const logout = () => {
    netlifyIdentity.logout();
  };
  const context = { user, login, logout, authready };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
