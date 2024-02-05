import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo"; // Assume you have this component
import Calendar from "./pages/Calendar"; // Assume you have this component
import Journal from "./pages/Journal"; // Assume you have this component
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/todos" element={<ToDo />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/journal" element={<Journal />} />
          {/* Redirect "/" to "/todos" or another default route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
