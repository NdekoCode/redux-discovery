import React from "react";
import Sidebar from "../Sidebar";

const PageContent = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default PageContent;
