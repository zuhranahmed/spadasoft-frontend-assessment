import React from "react";
import { IconCopy } from "../../assets/icons";
import styles from "./index.module.scss";
import cx from "clsx";

const UserAvatar = props => {
  const { name, id } = props;
  return (
    <div className="flex align-items-center gap-10">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile Image"
        className={styles.avatar}
      />
      <div className="flex flex-column gap-2">
        <div className={styles.name}>{name}</div>
        <div className={cx(styles.id, "flex align-items-center gap-4")}>
          <span>{id}</span>
          <IconCopy size={12} color="#86909f" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

UserAvatar.defaultProps = {
  name: "John Doe",
  id: "vID: #NR001",
};

export default UserAvatar;
