import { Component } from "react";
import classNames from "classnames";
import styles from "./FormComponent.module.css";

const INITIAL_VALUES = { name: "", email: "", password: "" };

const SIGN_UP_REGEXP = {
  name: /^(\D*).{2,30}$/,
  email: /^.+@.+$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*.].*).{8,30}$/,
};

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: INITIAL_VALUES.name,
      isNameValid: false,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({ name: value, isNameValid: SIGN_UP_REGEXP.name.test(value) });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({ email: value, isEmailValid: SIGN_UP_REGEXP.email.test(value) });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: SIGN_UP_REGEXP.password.test(value),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { isNameValid, isEmailValid, isPasswordValid } = this.state;

    if (isNameValid && isEmailValid && isPasswordValid) {
      alert("All fields is correct. Data sent");
    } else {
      alert("Not all fielst is correct");
    }
  };

  render() {
    const { name, email, password, isNameValid, isEmailValid, isPasswordValid } =
      this.state;

    const nameClassNames = classNames(styles.FormInput, {
      [styles.FormInputValid]: isNameValid,
      [styles.FormInputInvalid]: !isNameValid,
    });

    const emailClassNames = classNames(styles.FormInput, {
      [styles.FormInputValid]: isEmailValid,
      [styles.FormInputInvalid]: !isEmailValid,
    });

    const passwordClassNames = classNames(styles.FormInput, {
      [styles.FormInputValid]: isPasswordValid,
      [styles.FormInputInvalid]: !isPasswordValid,
    });

    return (
      <article className={styles.FormContainer}>
        <span className={styles.Logo}>
          <i className="fa-solid fa-square-pen"></i>
        </span>
        <h1 className={styles.TitleForm}>Create Your Account</h1>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <label className={styles.LabelForm}>
            Enter your name
            <input
              className={nameClassNames}
              placeholder="Enter your name"
              value={name}
              onChange={this.handleNameChange}
            ></input>
          </label>
          <label className={styles.LabelForm}>
            Enter your email
            <input
              className={emailClassNames}
              placeholder="Enter your email"
              value={email}
              onChange={this.handleEmailChange}
            ></input>
          </label>
          <label className={styles.LabelForm}>
            Enter password
            <input
              className={passwordClassNames}
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
            ></input>
          </label>

          <button className={styles.FormBtn}>Sign Up</button>
        </form>
      </article>
    );
  }
}

export default FormComponent;
