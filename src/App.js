// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// importing all the required components and pages
import Navbar from "./Component/Navbar";
import Homepage from "./Pages/Homepage";
import DetailsPage from "./Pages/DetailsPage";
import { Error } from "./Pages/Error";

// to render the habit tracker app
function App() {
  // defining different routes 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/detailspage", element: <DetailsPage /> },
      ]
    }
  ]);

  return (
    // rendering the page based on routes
    <RouterProvider router={router} />
  );
}

// export the component
export default App;
