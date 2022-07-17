import type { NextPage } from "next";
import { Button, TextField } from "@mui/material";
import styles from "../styles/Login.module.scss";

const SignUpPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <div className={styles.wrapLogin}>
          <form className={styles.loginForm}>
            <span className={styles.loginFormTitle}>
              <img src="logo_bosch.png" alt="Logo da Bosch" />
              <br />
              <br />
            </span>

            <h4>Login (EDV):</h4>
            <TextField className={styles.wrapInput} variant="standard" />

            <h4>E-mail:</h4>
            <TextField className={styles.wrapInput} variant="standard" />

            <h4>Password:</h4>
            <TextField className={styles.wrapInput} variant="standard" />

            <h4>Confirm Password:</h4>
            <TextField className={styles.wrapInput} variant="standard" />

            <div className={styles.containerLoginFormBtn}>
              <Button variant="contained" className={styles.loginFormBtn}>
                Sign Up
              </Button>
            </div>
            <div className={styles.textCenter}>
              <span className={styles.txt1}>Already have an account?</span>
              <a className={styles.txt2} href="/login">
                Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;