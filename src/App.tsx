import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Automations from "./pages/Automations";
import CaseStudies from "./pages/CaseStudies";
import React from "react";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </Layout>
  );
}

export default App;
