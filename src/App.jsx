import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import BookingsPage from "./pages/bookingsPage/BookingsPage";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Cabins from "./pages/cabins/Cabins";
import Accounts from "./pages/accounts/Accounts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BookingDetails from "./pages/bookingsPage/bookingDetails/BookingDetails";
import Login from "./pages/login/Login";
import Protected from "./pages/Protected";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <AppLayout />
      </Protected>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "bookingsPage",
        element: <BookingsPage />,
      },
      {
        path: "bookingsPage/:bookingId",
        element: <BookingDetails />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
