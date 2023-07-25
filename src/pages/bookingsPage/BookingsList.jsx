import TableHeader from "../../components/Layouts/TableHeader";
import { useGetBookings } from "./bookingHooks/useGetBookings";
import BookingDetailsRow from "./BookingDetailsRow";
import Spinner from "../../components/Spinner";

const BookingsList = () => {
  const { bookings, isLoading } = useGetBookings();
  if (isLoading) return <Spinner />;
  return (
    <div className="w-full  p-4">
      <div className="w-full flex flex-col gap-4">
        <div className="grid grid-cols-[0.4fr,0.8fr,0.8fr,0.6fr,0.4fr,0.4fr] md:grid-cols-[0.5fr,1fr,1fr,0.8fr,0.5fr,0.5fr] gap-x-1">
          <TableHeader label={"Cabin Name"} />
          <TableHeader label={"Guest Details"} />
          <TableHeader label={"Days"} />
          <TableHeader label={"Status"} />
          <TableHeader label={"Amount Paid"} />
        </div>
        {bookings &&
          bookings.map((booking) => (
            <BookingDetailsRow key={booking.id} booking={booking} />
          ))}
      </div>
    </div>
  );
};

export default BookingsList;
