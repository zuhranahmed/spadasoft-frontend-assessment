import React, { useState } from "react";
import styles from "./index.module.scss";
import TournatedLogoWeb from "../../assets/Images/tournatedLogoWeb.svg";
import {
  IconAthletes,
  IconChevronDown,
  IconChevronLeft,
  IconClubs,
  IconCoaches,
  IconDashboard,
  IconFederations,
  IconHome,
  IconLeagues,
  IconNews,
  IconPlus,
  IconTeams,
  IconTournaments,
} from "../../assets/icons";
import cx from "clsx";

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const menuLinks = [
    { key: "Home", title: "Home", href: "#", icon: <IconHome size={16} /> },
    { key: "Leagues", title: "Leagues", href: "#", icon: <IconLeagues size={16} /> },
    { key: "Tournaments", title: "Tournaments", href: "#", icon: <IconTournaments size={16} />, canAdd: true },
    { key: "Athletes", title: "Athletes", href: "#", icon: <IconAthletes size={16} /> },
    { key: "Teams", title: "Teams", href: "#", icon: <IconTeams size={16} />, canAdd: true },
    { key: "Coaches", title: "Coaches", href: "#", icon: <IconCoaches size={16} /> },
    { key: "Clubs", title: "Clubs", href: "#", icon: <IconClubs size={16} /> },
    { key: "Federations", title: "Federations", href: "#", icon: <IconFederations size={16} /> },
    { key: "News", title: "News", href: "#", icon: <IconNews size={16} /> },
  ];

  return (
    <div className={styles.sidebar}>
      <button className={cx(styles.collapseBtn, "cursor-pointer")}>
        <IconChevronLeft size={14} />
      </button>

      <img src={TournatedLogoWeb} alt="Logo" className={styles.logoWeb} />
      <ul className={"flex flex-column gap-10"}>
        <li>
          <a href="/" className={cx(styles.sidebarMenuLink, "flex align-items-center gap-10", styles.dashboard)}>
            <IconDashboard size={16} />
            <span>Dashboard</span>
          </a>
        </li>
        {menuLinks.map((item, i) => (
          <li>
            <a
              href={item?.href}
              key={item?.key}
              className={cx(
                styles.sidebarMenuLink,
                "flex align-items-center gap-10",
                activeMenuItem === item.key && styles.active
              )}
              onClick={() => setActiveMenuItem(item.key)}
            >
              {item?.icon}
              <span>{item?.title}</span>
              {item?.canAdd && (
                <div className="flex align-items-center gap-6">
                  <button className={styles.addBtn}>
                    <span>Add</span>
                    <IconPlus size={8} />
                  </button>
                  <IconChevronDown size={16} color="#86909F" />
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
