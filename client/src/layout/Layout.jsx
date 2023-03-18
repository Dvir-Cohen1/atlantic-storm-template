import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Navbar = React.lazy(() => import("./navbar/Navbar"));
const Footer = React.lazy(() => import("./footer/Footer"));

const Layout = () => {
  return (
    <section className="Layout bg-main-background text-white justify-start flex-col">
      <Navbar />
      <main className="container mx-auto mt-10">
        <Suspense fallback={<h1>Loading..</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
