import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, name, email, desc);
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us");
        setphone("");
        setname("");
        setdesc("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") setphone(value);
    if (name === "email") setemail(value);
    if (name === "desc") setdesc(value);
    if (name === "name") setname(value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className={styles.input}
            id="name"
            name="name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
            id="email"
            name="email"
          />
          <div className={styles.formText}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.formLabel}>
            Phone
          </label>
          <input
            type="text"
            value={phone}
            onChange={handleChange}
            className={styles.input}
            id="phone"
            name="phone"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="desc" className={styles.formLabel}>
            Elaborate your concern
          </label>
          <textarea
            value={desc}
            onChange={handleChange}
            className={styles.textarea}
            id="desc"
            name="desc"
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
