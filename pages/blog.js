import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import Image from "next/image";

const Blog = (props) => {
  const { allBlogs } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {allBlogs.map((blogitem) => (
          <div key={blogitem.slug} className={styles.blogCard}>
            <Link
              href={`/blogpost/${blogitem.slug}`}
              className={styles.blogLink}
            >
              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{blogitem.title}</h3>
                <p className={styles.blogDescription}>
                  {blogitem.metadesc.length > 140
                    ? blogitem.metadesc.substr(0, 140) + "..."
                    : blogitem.metadesc}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fs.promises.readdir("blogdata");
  const allBlogs = await Promise.all(
    data.map(async (file) => {
      const fileContent = await fs.promises.readFile(
        `blogdata/${file}`,
        "utf-8"
      );
      return JSON.parse(fileContent);
    })
  );

  return {
    props: { allBlogs },
  };
}

export default Blog;
