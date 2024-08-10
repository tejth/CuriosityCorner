import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href={"/"}>
          <li className={pathname === "/" ? styles.active : ""}>Home</li>
        </Link>
        <Link href={"/contact"}>
          <li className={pathname === "/contact" ? styles.active : ""}>
            Contact
          </li>
        </Link>
        <Link href={"/blog"}>
          <li className={pathname === "/blog" ? styles.active : ""}>Blog</li>
        </Link>
        <Link href={"/docs/docmain"}>
          <li className={pathname === "/docs/docmain" ? styles.active : ""}>
            Docs
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
