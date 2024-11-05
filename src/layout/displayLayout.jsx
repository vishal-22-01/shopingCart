import React from "react";

const DisplayLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      {children}
    </div>
  );
};

export default DisplayLayout;
