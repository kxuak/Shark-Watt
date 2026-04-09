import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import YouDo from "./pages/YouDo";
import LadingPage from "./pages/LadingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        
        <Route path="/youDo" element={<YouDo/>}/>
          
        <Route path="/" element={<LadingPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
