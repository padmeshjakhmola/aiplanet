import React from "react";
import CustomCard from "../CustomCard";
import { tempData } from "@/constants/tempdata";

const EventInfo = () => {
  return (
    <div className="bg-blue-1 py-16">
      <div className="grid grid-rows-2 grid-flow-col gap-16 mx-80">
        {tempData.map(
          ({ id, image, status, title, startEnd, days, hours, mins }) => (
            <CustomCard
              key={id}
              id={id}
              image={image}
              status={status}
              title={title}
              startEnd={startEnd}
              days={days}
              hours={hours}
              mins={mins}
            />
          )
        )}
      </div>
    </div>
  );
};

export default EventInfo;
