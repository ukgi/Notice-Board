import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList/PostList";
import Register from "../src/pages/Register/Register";
import Login from "../src/pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <PostList />,
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
