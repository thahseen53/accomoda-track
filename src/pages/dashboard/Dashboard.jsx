import React from "react";
import DashBoardFilter from "./components/DashBoardFilter";
import { useRecentBookings } from "./dashboardHooks/useRecentBookings";
import { useRecentStays } from "./dashboardHooks/useRecentStays";
import Uploader from "../../data/Uploader";
import StatsComponent from "./components/StatsComponent";
import Spinner from "../../components/Spinner";
import SalesChart from "./components/SalesChart";

const Dashboard = () => {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    numDays,
    isLoading: isLoading2,
  } = useRecentStays();
  if (isLoading1 || isLoading2) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] font-bold">Dashboard</h1>
        <DashBoardFilter />
      </div>
      <div className="flex gap-4 items-center mt-7 justify-around p-2">
        <StatsComponent
          bookings={bookings}
          stays={stays}
          confirmedStays={confirmedStays}
          numDays={numDays}
        />
      </div>
      <div className="my-8">
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>
    </div>
  );
};

export default Dashboard;
