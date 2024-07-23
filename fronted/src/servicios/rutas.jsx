import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactos from "../paginas/Contactos";
import AcerdaDe from "../paginas/AcerdaDe";
import Home from "../paginas/Home";
import NotFoundPage from "../paginas/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contactos",
    element: <Contactos />,
  },
  {
    path: "/acerca-de",
    element: <AcerdaDe />,
  },
]);

export default function RutasBrowProv() {
  return <RouterProvider router={router} />;
}
