import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import { LangProvider } from "@/lib/i18n";
import Home from "@/pages/Home";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import NotFound from "@/pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  </StrictMode>,
);
