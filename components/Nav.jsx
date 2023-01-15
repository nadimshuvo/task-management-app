import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import style from "../styles/Nav.module.scss";

export default function Nav() {
  const router = useRouter();

  return (
    <React.Fragment>
      <ul className={`d-flex ${style["nav-container"]}`}>
        <li>
          <Link
            href="/"
            className={
              router.pathname === "/" ? style["link-active"] : style.link
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={
              router.pathname === "/products"
                ? style["link-active"]
                : style.link
            }
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/guidlines"
            className={
              router.pathname === "/guidlines"
                ? style["link-active"]
                : style.link
            }
          >
            Guidlines
          </Link>
        </li>
        <li>
          <Link
            href="/review"
            className={
              router.pathname === "/review" ? style["link-active"] : style.link
            }
          >
            Review
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
