import Home from "./pages/Home";
import Detail from "./pages/Detail";


  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
  ]

export default router;
