import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_DATA } from "./constants/routes.constants";
import Header from "./components/header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {ROUTE_DATA.map((route) => (
          <Route key={route.id} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
