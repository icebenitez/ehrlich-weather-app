import { useAuth0 } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Weather from "./pages/Weather";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <Landing />,
      },
      {
        path: "/weather/:city",
        element: <Weather />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
