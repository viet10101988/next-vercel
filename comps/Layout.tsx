import { NextComponentType } from "next";
import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
