import {} from "react";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
