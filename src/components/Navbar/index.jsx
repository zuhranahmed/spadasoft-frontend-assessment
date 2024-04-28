import React from "react";
import styles from "./index.module.scss";
import {
  IconChevronDown,
  IconDashboard,
  IconLocation,
  IconPricing,
  IconSearch,
  IconTennis,
  IconUnion,
  IconVolleyball,
} from "../../assets/icons";
import cx from "clsx";
import Button from "../Button";
import UserAvatar from "../UserAvatar";
import SearchInput from "../SearchInput";

const Navbar = props => {
  return (
    <div className={cx(styles.navbar, "flex align-items-center justify-between py-12 px-20")}>
      <div className="flex align-items-center gap-50">
        <div className="flex align-items-center gap-16">
          <div className="flex align-items-center gap-16">
            <div className={cx(styles.chevronDropdown, "cursor-pointer flex align-items-center justify-center")}>
              <IconChevronDown size={10} />
            </div>
            <div className="flex align-items-center gap-10">
              <IconVolleyball size={16} color="#0A2540" role="button" className="cursor-pointer" />
              <IconTennis size={16} color="#0A2540" role="button" className="cursor-pointer" />
              <IconUnion size={16} color="#0A2540" role="button" className="cursor-pointer" />
            </div>
          </div>
          <div style={{ height: 16, width: 1, backgroundColor: "#EDEDED" }} />
          <div className={cx(styles.location, "flex align-items-center gap-6 cursor-pointer")}>
            <IconLocation size={20} />
            <span>Latvia</span>
          </div>
        </div>
        <SearchInput />
      </div>
      <div className="flex align-items-center gap-30">
        <div className="flex align-items-center gap-14">
          <button className={styles.dashboardBtn}>
            <IconDashboard size={16} />
          </button>
          <Button
            variant="secondary"
            iconRight={<IconChevronDown size={16} />}
            fontWeight="medium"
            text="Booking"
            fontSize="font14"
          />
          <Button variant="primaryGradient" text="Pricing" iconLeft={<IconPricing size={16} />} fontWeight="bold" />
        </div>
        <div style={{ height: 16, width: 1, backgroundColor: "#EDEDED" }} />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
