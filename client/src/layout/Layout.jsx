import React, { Suspense } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="Layout bg-main-background text-white justify-start flex-col">
      <Navbar />
      <main className="container mx-auto mt-10">
        <Suspense fallback={<h1>Loading..</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>
    </section>
  );
};

export default Layout;
