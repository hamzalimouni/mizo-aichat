import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Chat from "./pages/chat/Chat";

const App = () => {

  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/dashboard",
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
]);

  return (
    <RouterProvider router={router} />
  );
}

export default App