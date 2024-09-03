import React from "react";
import CustomCard from "../CustomCard";

import a from "@/public/assets/cardimage/a.png";
import b from "@/public/assets/cardimage/b.png";
import c from "@/public/assets/cardimage/c.png";
import d from "@/public/assets/cardimage/d.png";
import e from "@/public/assets/cardimage/e.png";
import f from "@/public/assets/cardimage/f.png";

const EventInfo = () => {
  return (
    <div className="bg-blue-1 py-16">
      <div className="grid grid-rows-2 grid-flow-col gap-16 mx-80">
        <CustomCard
          image={a}
          status="Upcoming"
          title="Data Science Bootcamp - Graded Datathon"
          startEnd="Starts"
          days="00"
          hours="22"
          mins="15"
        />
        <CustomCard
          image={b}
          status="Upcoming"
          title="Data Sprint 72 - Butterfly Identification"
          startEnd="Starts"
          days="00"
          hours="22"
          mins="15"
        />
        <CustomCard
          image={c}
          status="Active"
          title="Data Sprint 71 - Weather Recognition"
          startEnd="Ends"
          days="00"
          hours="22"
          mins="15"
        />
        <CustomCard
          image={d}
          status="Active"
          title="Data Sprint 70-Airline Passenger Satisfaction"
          startEnd="Ends"
          days="00"
          hours="22"
          mins="15"
        />
        <CustomCard
          image={e}
          status="Past"
          title="Engineering Graduates Employment Outcomes"
          startEnd="Ended"
          days="00"
          hours="22"
          mins="15"
        />
        <CustomCard
          image={f}
          status="Past"
          title="Travel Insurance Claim Prediction"
          startEnd="Ended"
          days="00"
          hours="22"
          mins="15"
        />
      </div>
    </div>
  );
};

export default EventInfo;
