
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from './router';

function App() {
  const RouterObject = createBrowserRouter(router);

  return (
    <>
      <RouterProvider router={RouterObject} />
    </>
  );
  
}

export default App;
