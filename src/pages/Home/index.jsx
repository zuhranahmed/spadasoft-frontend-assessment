import React from "react";
import MainLayout from "../../Layout";
import styles from "./index.module.scss";
import VenueCard from "../../components/VenueCard";
import { venuesList } from "../../utils/Venues";
import cx from "clsx";
import SearchInput from "../../components/SearchInput";
import ShowMapButton from "../../components/ShowMapButton";

const HomeScreen = props => {
  return (
    <div className="px-32 py-24">
      <div className={cx("flex align-items-center justify-between mb-10")}>
        <div className={styles.totalResults}>{venuesList.length} Results</div>

        <div className="flex align-items-center gap-14">
          <SearchInput className={styles.customSearch} />
          <ShowMapButton />
        </div>
      </div>
      <div className={styles.venuesGrid}>
        {venuesList.map(item => {
          return (
            <VenueCard
              venueTitle={item?.venueDetails?.title}
              venueImage={item?.venueDetails?.img}
              venueType={item?.venueDetails?.type}
              venueAddress={item?.venueDetails?.address?.title}
              venueFlag={item?.venueDetails?.address?.flag}
              date={item?.date}
              timeSlots={item?.timeslots}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainLayout(HomeScreen);
