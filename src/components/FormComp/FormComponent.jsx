import { Component } from "react";
import styles from "./FormComponent.module.css";

class FormComponent extends Component {
  render() {
    return (
      <article className={styles.FormContainer}>
        <span className={styles.Logo}>
          <i className="fa-solid fa-square-pen"></i>
        </span>
        <h1 className={styles.TitleForm}>Create Your Account</h1>
        <form className={styles.Form}>
          <label className={styles.LabelForm}>
            Enter your name
            <input
              className={styles.FormInput}
              placeholder="Enter your name"
            ></input>
          </label>
          <label className={styles.LabelForm}>
            Enter your email
            <input
              className={styles.FormInput}
              placeholder="Enter your email"
              type="email"
            ></input>
          </label>
          <label className={styles.LabelForm}>
            Enter password
            <input
              className={styles.FormInput}
              placeholder="Enter password"
              type="password"
            ></input>
          </label>

          <button className={styles.FormBtn}>Sign Up</button>
        </form>
      </article>
    );
  }
}

export default FormComponent;
