import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";

// Step 1:- Find the file corresponding to the slug
// Step 2: Populate them inside the page.
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr></hr>
        <div>
          lorem asd af asdf af awaw e qwe fgre ac asc aafsg 4aw. 2eeafa asdf.
        </div>
      </main>
    </div>
  );
};

export default slug;
