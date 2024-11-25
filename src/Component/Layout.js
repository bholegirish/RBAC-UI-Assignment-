import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where the header should not be displayed
  const noHeaderRoutes = ["/login"];

  return (
    <div>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
