import BookingsList from "./BookingsList";

const BookingsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[1.8rem] font-bold ">All Bookings</h1>
        <div>Filter/sort</div>
      </div>
      <div className="my-10">
        <BookingsList />
      </div>
    </div>
  );
};

export default BookingsPage;
