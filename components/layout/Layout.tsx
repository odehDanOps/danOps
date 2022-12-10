import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="h-screen">
        <Header />
          <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;