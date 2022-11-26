import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./Components/AddUser";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: "/user/add",
      element: <AddUser></AddUser>,
    },
  ]);
  return <div className="app"><RouterProvider router={router}></RouterProvider></div>;
}

export default App;
