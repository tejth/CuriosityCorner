import React from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

// step 1:- collect all the files from blog data directory.
// step 2:- Iterate through them and Display them

const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/lear-javascript"}>
            <h1>How to learn js in 2022?</h1>
            <p>Js is a language designed for web!</p>
          </Link>
        </div>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/lear-javascript"}>
            <h1>How to learn js in 2022?</h1>
            <p>Js is a language designed for web!</p>
          </Link>
        </div>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/lear-javascript"}>
            <h1>How to learn js in 2022?</h1>
            <p>Js is a language designed for web!</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default blog;
