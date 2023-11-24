import React from "react";
interface authLayoutProps {
  children: React.ReactNode;
}
const layout: React.FC<authLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">{children}</div>
  );
};

export default layout;
