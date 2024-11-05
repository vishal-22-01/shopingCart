import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {children}
    </div>
  );
};

export default Layout;
