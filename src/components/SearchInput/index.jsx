import React from "react";
import styles from "./index.module.scss";
import { IconSearch } from "../../assets/icons";
import cx from "clsx";

const SearchInput = props => {
  const { className } = props;
  return (
    <div className={cx(styles.search, "flex align-items-center", className)}>
      <IconSearch size={20} />
      <input type="search" name="search" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
