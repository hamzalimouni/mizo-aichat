import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Chat from "./pages/chat/Chat";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import RootLayout from "./layouts/rootLayout/RootLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";

const App = () => {

  const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign-in/*",
        element: <Signin />
      },
      {
        path: "/sign-up/*",
        element: <Signup />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chat />
          }
        ]
      },
    ]
  },
]);

  return (
    <RouterProvider router={router} />
  );
}

export default App