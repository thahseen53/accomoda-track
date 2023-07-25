import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
const StatsComponent = ({ bookings, confirmedStays, numDays }) => {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const checkins = confirmedStays.length;
  const occupation =
    Math.round(
      (confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
        (numDays * 8)) *
        100
    ) + "%";
  return (
    <>
      <Stat
        title={"BOOKINGS"}
        icon={<HiOutlineBriefcase className="w-[1.6rem] h-[1.6rem]" />}
        value={numBookings}
      />
      <Stat
        title={"SALES"}
        icon={<HiOutlineBanknotes className="w-[1.6rem] h-[1.6rem]" />}
        value={sales}
      />
      <Stat
        title={"CHECK IN"}
        icon={<HiOutlineCalendarDays className="w-[2rem] h-[2rem] " />}
        value={checkins}
      />
      <Stat
        title={"OCCUPANCY RATE"}
        icon={<HiOutlineChartBar className="w-[2rem] h-[2rem]" />}
        value={occupation}
      />
    </>
  );
};

export default StatsComponent;
