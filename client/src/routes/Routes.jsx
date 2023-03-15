import React from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./_routes";
import Layout from "../layout/Layout";

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {appRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={index}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default RouterWrapper;
