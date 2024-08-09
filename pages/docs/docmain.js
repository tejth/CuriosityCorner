import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the hamburger (bars) and close (times) icons
import styles from "../../styles/sidebar.module.css";

const DocMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to expanded
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Automatically open sidebar on large screens
      } else {
        setIsSidebarOpen(false); // Automatically close sidebar on small screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.open : styles.closed
        }`}
      >
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMobile && (
        <button
          className={`${styles.sidebarToggle} ${
            isSidebarOpen ? styles.openIcon : styles.closedIcon
          }`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* Display hamburger or close icon */}
        </button>
      )}
      <div
        className={`${styles.content} ${isSidebarOpen ? styles.shifted : ""}`}
      >
        <h1>DocMain</h1>
        <p>Welcome to the main content area.</p>
      </div>
    </div>
  );
};

export default DocMain;
