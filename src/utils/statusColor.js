export const statusColor = (status) => {
    if (status === "checked-in") {
      return "bg-green-100 border border-green-300 text-green-600 px-1 rounded-lg  text-center font-semibold";
    }
    if (status === "unconfirmed") {
      return "bg-red-100 border border-red-300 text-red-600 px-1 rounded-lg  text-center font-semibold";
    }
    if (status === "checked-out") {
      return "bg-gray-100 border border-gray-300 text-gray-600 px-1 rounded-lg  text-center font-semibold";
    }
  };