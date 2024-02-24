import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo"; // Assume you have this component
import CalendarPage from "./pages/CalendarPage"; // Assume you have this component
import Journal from "./pages/Journal"; // Assume you have this component
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ToDo />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/journal" element={<Journal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
