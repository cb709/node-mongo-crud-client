import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./Components/AddUser";
import Home from "./Components/Home";
import Update from "./Components/Update";

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
    {
      path: "/user/update/:id",
      element: <Update></Update>,
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    },
  ]);
  return <div className="app"><RouterProvider router={router}></RouterProvider></div>;
}

export default App;
