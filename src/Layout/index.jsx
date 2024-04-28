import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styles from "./index.module.scss";

const MainLayout = WrappedComponent => {
  const Layout = props => {
    return (
      <div className={styles.layoutGrid}>
        <Sidebar />
        <div>
          <Navbar />
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };

  return Layout;
};

export default MainLayout;
