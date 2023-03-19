import React from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./_routes";
import Layout from "../layout/Layout";
import PageNotFound from "../pages/404/PageNotFound";

const RouterWrapper = () => {
  const routeComponents = appRoutes.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />} />
  ));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routeComponents}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default RouterWrapper;
