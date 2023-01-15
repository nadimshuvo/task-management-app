import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import x from "../images/x-icon.svg";
import style from "../styles/Header.module.scss";
import Nav from "./Nav";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.innerWidth <= 768 ? "" : setOpenNav(true);
  });
  return (
    <header>
      <div className="wrapper">
        <div className={`d-flex ${style["header-inner"]}`}>
          <div className="logo">
            <Image src={logo} />
          </div>
          <nav className={`${style.nav}`}>
            {openNav && <Nav />}
            {openNav && (
              <span
                className={`${style["x-icon"]}`}
                onClick={() => setOpenNav((preValue) => !preValue)}
              >
                <Image src={x} />
              </span>
            )}
          </nav>
          <motion.div
            className={`${style.cta}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <button>Sign In</button>
          </motion.div>
          <div
            className={`${style["mobile-menu"]} `}
            onClick={() => setOpenNav((preValue) => !preValue)}
          >
            <Image src={menu} />
          </div>
        </div>
      </div>
    </header>
  );
}
