import React from "react";
import styles from "./index.module.scss";

const ShowMapButton = () => {
  return (
    <div className={styles.showMapBtn}>
      <button className="cursor-pointer">
        <span>Show Map</span>
      </button>
    </div>
  );
};

export default ShowMapButton;
