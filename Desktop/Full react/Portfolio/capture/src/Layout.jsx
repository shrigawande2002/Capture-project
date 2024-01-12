import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {motion} from "framer-motion"
import Nav from "./components/Nav";
import { PageAnimation } from "./Amimation";

function Layout() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <motion.div
        key={location.pathname}
        variants={PageAnimation}
        animate="show"
        exit={"exit"}
        initial="hidden"
             >
        <Outlet />
      </motion.div>
    </>
  );
}

export default Layout;
