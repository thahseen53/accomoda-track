import React from "react";
import { getDateFormat, numOfDays } from "../../utils/dateFormat";
import { useNavigate } from "react-router-dom";
import { statusColor } from "../../utils/statusColor";

const BookingDetailsRow = ({ booking }) => {
  const { id, cabins, guests, startDate, endDate, status, isPaid } = booking;
  const navigate = useNavigate();
  return (
    <div className="text-[0.5rem] md:text-[1rem] grid grid-cols-[0.4fr,0.6fr,0.6fr,0.5fr,0.4fr,0.4fr] md:grid-cols-[0.5fr,1fr,1fr,0.8fr,0.5fr,0.5fr] shadow-lg bg-[#240046] py-2 justify-center gap-x-1 rounded-lg">
      <div className="pl-2">
        <span>{cabins.name}</span>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="font-semibold text-[0.8rem] md:text-[1.2rem]">
          {guests.fullName}
        </span>

        <span>{guests.email}</span>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="font-bold w-10/12">{`Booked for ${numOfDays(
          startDate,
          endDate
        )} Days`}</span>
        <span>{` ${getDateFormat(startDate)} -> ${getDateFormat(
          endDate
        )}`}</span>
      </div>
      <div>
        <span className={`${statusColor(status)} w-10/12`}>{status}</span>
      </div>
      <div>
        <span
          className={`${
            isPaid ? "text-green-400 " : "text-red-400"
          } font-semibold ml-2`}
        >
          {isPaid ? "Yes" : "No"}
        </span>
      </div>
      <div className="ml-3">
        <button
          className="px-4 font-bold text-[0.8rem] bg-[#FF6D00] text-white rounded-lg"
          onClick={() => navigate(`${id}`)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default BookingDetailsRow;
