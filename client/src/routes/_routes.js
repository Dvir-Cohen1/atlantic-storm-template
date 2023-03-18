import React from "react";

const Home = React.lazy(() => import("../pages/home/Home"));
const Matches = React.lazy(() => import("../pages/matches/Matches"));
const News = React.lazy(() => import("../pages/news/News"));

export const appRoutes = [
  { linkLabel: "Home", path: "/", component: Home, isProtected: false },
  { linkLabel: "News", path: "/News", component: News, isProtected: false },
  { linkLabel: "Blogs", path: "/Blogs", component: Home, isProtected: false },
  { linkLabel: "Matches", path: "/Matches", component: Matches, isProtected: false },
  { linkLabel: "Teams", path: "/Teams", component: Home, isProtected: false },
];
