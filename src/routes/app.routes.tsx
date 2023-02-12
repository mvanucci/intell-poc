import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "../components/Layout";
import Configuration from "../pages/Configuration";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => (
  <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/config" element={<Configuration />} />
      </Routes>
  </Layout>
);

export default AppRoutes;