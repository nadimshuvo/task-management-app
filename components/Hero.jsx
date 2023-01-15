import { Sora } from "@next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import heroBg from "../images/hero-bg.svg";
import heroDot from "../images/hero-dot.svg";
import managementDottedBorder from "../images/management-dotted-border.svg";
import managementFourDots from "../images/management-four-dots.svg";
import style from "../styles/Hero.module.scss";

const sora = Sora({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="wrapper">
      <div className={`${style.hero} `}>
        <motion.div
          className={`${style["hero-bg"]}`}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 1,
            repeatDelay: 2,
          }}
        >
          <Image src={heroBg} />
        </motion.div>
        <div className={`${style["hero-inner"]}`}>
          <motion.h1
            className={`${style.h1}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Make <span className={`${style.management}`}>Management</span> Way
            More Easier Than Ever
            <span className={`${style.managementDottedBorder}`}>
              <Image src={managementDottedBorder} />
            </span>
            <span className={`${style.managementFourDots}`}>
              <Image src={managementFourDots} />
            </span>
            <span className={`${style["hero-dot"]} `}>
              <Image src={heroDot} />
            </span>
          </motion.h1>
          <p className={`${style.des}`}>
            The online collaborative management platform to bring more
            efficiency and performace
          </p>
          <div className={`${style.cta}`}>
            <motion.button
              className={`${style.btn1} ${sora.className}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
            >
              Request Demo
            </motion.button>
            <motion.button
              className={`${style.btn2} ${sora.className}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
