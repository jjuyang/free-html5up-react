// app/ClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInactive, setIsInactive] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setIsInactive(true);
      } else {
        setIsInactive(false);
      }
      setIsPreloaded(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMainClick = () => {
    if (!isInactive && window.innerWidth <= 1280) {
      setIsInactive(true);
    }
  };

  return (
    <div className={isPreloaded ? "is-preload" : ""}>
      <div id="root">
        <div id="wrapper">
          <div id="main" onClick={handleMainClick}>
            <div className="inner">{children}</div>
          </div>
          <div id="sidebar" className={isInactive ? "inactive" : ""}>
            <Sidebar isInactive={isInactive} setIsInactive={setIsInactive} />
          </div>
        </div>
      </div>
    </div>
  );
}
