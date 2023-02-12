import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "../components/Layout";
import Configuration from "../pages/Configuration";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/config" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);

export default AppRoutes;