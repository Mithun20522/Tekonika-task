import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_DATA } from "./constants/routes.constants";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {ROUTE_DATA.map((route) => (
          <Route key={route.id} path={route.path} element={<route.element />}>
            {route.subelements?.map((subelement, index) => (
              <Route
                key={`${route.id}-${index}`}
                path={subelement.path}
                element={
                  subelement.element ? (
                    <subelement.element
                      routeName={subelement.name}
                      parentName={route.name}
                    />
                  ) : (
                    <route.element
                      routeName={subelement.name}
                      parentName={route.name}
                    />
                  )
                }
              />
            ))}
          </Route>
        ))}
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}
