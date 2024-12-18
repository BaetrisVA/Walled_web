import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Transfer from "./pages/Transfer.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateLayout from "./layouts/PrivateLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import { ThemeProvider } from "./provider/ThemeProviders.jsx";
import Daftar from "./pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<App />} />
            <Route path="/transfer" element={<Transfer />} />
          </Route>
          <Route path="*" element={<Daftar />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
