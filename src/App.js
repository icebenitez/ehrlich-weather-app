import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Root from "./pages/Root";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Weather from "./pages/Weather";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
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
