import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";
import Home from "../src/component/home_page/Home";
import Weather from "../src/component/weather_page/Weather";
import ToDoList from "../src/component/to_do_list_page/ToDoList";
import Meditation from "../src/component/meditation_page/Meditation";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/todolist",
        element: <ToDoList />,
      },
      {
        path: "/meditation",
        element: <Meditation />,
      },
      {
        path: "/meditation/:id",
        element: <Meditation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
