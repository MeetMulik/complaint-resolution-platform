import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddComplaint from "./pages/AddComplaint";
import ViewComplaints from "./pages/ViewComplaints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/addcomplaint",
    element: <AddComplaint/>,
  },
  {
    path:"/viewcomplaints",
    element: <ViewComplaints/>
  }
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </div>
  );
};

export default App;
