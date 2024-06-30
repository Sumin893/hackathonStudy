
import Header from "./components/Header";
import Homepage from "./pages/Homepage/Homepage";
import Home from "./pages/Home/Home";
import Next from "./pages/Next/Next";
import Event from "./pages/Event/Counter";
import Members from "./pages/Members/Members"

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
      {
        path: "/Event",
        element: <Event />,
      },
      {
        path: "/Members",
        element: <Members />,
      },
    ]
  }
]

export default router