import React, { useEffect, useState } from "react";
import { useGetBookingDetails } from "../bookingHooks/useGetBookingDetails";
import Spinner from "../../../components/Spinner";
import { statusColor } from "../../../utils/statusColor";
import { getDateFormat } from "../../../utils/dateFormat";
import { useNavigate } from "react-router-dom";
import { useCheckin } from "../bookingHooks/useCheckin";

const BookingDetails = () => {
  const { isLoading, error, booking } = useGetBookingDetails();
  const navigate = useNavigate();
  const [confirmPaid, setConfirmPaid] = useState(false);

  useEffect(() => {
    setConfirmPaid((confirm) => (confirm = booking?.isPaid || false));
  }, [booking]);
  const { checkin } = useCheckin();
  if (isLoading) {
    return <Spinner />;
  }

  const handleNavigation = () => {
    navigate("/bookingsPage");
  };
  function handleCheckin(id) {
    if (!confirmPaid) return;
    checkin({ id });
  }

  return (
    <div className="p-4">
      <div className="flex gap-5 items-center">
        <h1 className="text-2xl font-bold">Booking Details of #{booking.id}</h1>
        <span className={statusColor(booking.status)}>{booking.status}</span>
      </div>
      <div className="mt-5">
        <div className="flex py-5 px-2 justify-between bg-[#FF6D00] text-white font-semibold rounded-t-lg md:w-3/4 md:m-auto">
          <h2>
            {booking.numNights} nights in Cabin {booking.cabins.name}
          </h2>
          <h2>
            from {getDateFormat(booking.startDate)} to{" "}
            {getDateFormat(booking.endDate)}
          </h2>
        </div>
        <div className="md:w-3/4 md:mx-auto bg-[#240046] p-4">
          <div className="flex gap-4">
            <h2 className="font-semibold">
              {booking.guests.fullName} + {booking.numGuests - 1} guests
            </h2>
            <p>{booking.guests.email}</p>
          </div>
          <div className="flex gap-3 mt-3">
            <p className="font-bold">Observations</p>
            <p>
              {booking?.observation ? booking.observation : "No observations"}
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <p className="font-bold">Breakfast included ? </p>
            <p>{booking?.hasBreakFast ? "Yes" : "No"}</p>
          </div>
        </div>
        <div
          className={`my-4 flex justify-between items-center border-2 rounded-lg md:w-9/12 md:mx-auto ${
            booking.isPaid
              ? "bg-green-300"
              : "bg-red-200 text-red-600  border-red-500 font-bold"
          }`}
        >
          <p className="p-2 "> total Price : {booking.totalPrice}</p>
          <p className="p-2">{booking.isPaid ? "Paid" : "Not paid"}</p>
        </div>
      </div>

      <div className="text-center p-2 font-semibold">
        <input
          className="form-checkbox h-4 w-4 text-cyan-700"
          type="checkbox"
          name=""
          id=""
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid}
        />
        <label htmlFor="checkin" className="mx-2">
          I confirm that {booking.guests.fullName} has paid the total amount
        </label>
      </div>
      <div className="w-full text-right">
        <button
          className="px-4 py-2 rounded-lg text-white font-bold bg-[#FF6D00]"
          disabled={
            !confirmPaid || booking.isPaid || booking.status === "check-out"
          }
          onClick={() => handleCheckin(booking.id)}
        >
          Check in booking #{booking.id}{" "}
        </button>
        <button
          className="m-8 bg-[#FF6D00] px-4 py-2 border-2 border-gray-500 rounded-lg cursor-pointer disabled:opacity-2 disabled:cursor-not-allowed"
          onClick={() => handleNavigation()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
