
import Header from "./components/Header";
import Homepage from "./pages/Homepage/Homepage";
import Home from "./pages/Home/Home";
import Next from "./pages/Next/Next";

const router = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/fleamarket",
        element: <Home />,
      },
      {
        path: "/nearby-stores",
        element: <Next />,
      },
    ]
  }
]

export default router