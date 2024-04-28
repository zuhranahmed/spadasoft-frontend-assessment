import cx from "clsx";
import React from "react";
import { IconChevronRight, IconDevicesOff, IconTennis } from "../../assets/icons";
import styles from "./index.module.scss";

const VenueCard = props => {
  const { venueTitle, venueAddress, venueType, venueImage, venueFlag, date, timeSlots, venueSport, venueSportIcon } =
    props;
  return (
    <div className={cx(styles.venueCard, "p-16")}>
      <div className={styles.venueCardDetails}>
        <div className={cx("flex justify-between mb-12")}>
          <div className={cx("flex align-items-center gap-12")}>
            <img src={venueImage} alt="venueImage" className={styles.venueImg} />
            <h2 className={styles.venueTitle}>{venueTitle}</h2>
          </div>
          <div className={cx(styles.venueType, "flex align-items-center justify-center")}>{venueType}</div>
        </div>
        <div className={cx("flex align-items-center gap-12")}>
          <img src={venueFlag} alt="venueFlag" className={styles.flag} />
          <span className={styles.address}>{venueAddress}</span>
        </div>
      </div>

      <div className={styles.timeDetails}>
        <div className="flex align-items-center justify-between mb-12">
          <div className={styles.date}>{date}</div>
          {timeSlots.length > 0 ? (
            <button className={cx(styles.sportType, "flex align-items-center justify-center gap-6 cursor-pointer")}>
              <IconTennis size={16} />
              <span>Tennis</span>
              <IconChevronRight size={10} />
            </button>
          ) : (
            <button className={cx(styles.viewAvenue, "cursor-pointer")}>View venue</button>
          )}
        </div>
        {timeSlots.length > 0 ? (
          <div className={styles.timeslotsGrid}>
            {timeSlots.map(item => (
              <div className={styles.timeSlot}>{item}</div>
            ))}

            {timeSlots.length >= 9 && <button className={cx("cursor-pointer", styles.more)}>more</button>}
          </div>
        ) : (
          <div className={cx(styles.emptyVenueState, "flex align-items-center justify-center")}>
            <div className="flex align-items-center gap-10">
              <IconDevicesOff />
              <span>
                Online booking <br />
                is not available
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueCard;
