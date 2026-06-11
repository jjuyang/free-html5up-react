// src/components/Layout.tsx

import Sidebar from "./Sidebar";
import type { JSX } from "react";

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          {children}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Layout;