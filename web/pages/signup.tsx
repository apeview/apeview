import type { NextPage } from "next";
import { Button, Link, TextField } from "@mui/material";
import styles from "../styles/Login.module.scss";
import { Notificate } from "../common/types";
import { useRouter } from "next/router";

const SignUpPage: NextPage<Notificate> = ({ notificate }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <div className={styles.wrapLogin}>
          <form className={styles.loginForm}>
            <span className={styles.loginFormTitle}>
              <img src="/logo_bosch.png" alt="Logo da Bosch" />
              <br />
              <br />
            </span>

            <h4>Login (EDV):</h4>
            <TextField className={styles.wrapInput} variant="standard" />

            <h4>E-mail:</h4>
            <TextField className={styles.wrapInput} variant="standard" />

            <h4>Password:</h4>
            <TextField
              type="password"
              className={styles.wrapInput}
              variant="standard"
            />

            <h4>Confirm Password:</h4>
            <TextField
              type="password"
              className={styles.wrapInput}
              variant="standard"
            />

            <div className={styles.containerLoginFormBtn}>
              <Button
                variant="contained"
                onClick={() => {
                  router.push("/login");
                  notificate("Sign up solicitation send to admin", "success");
                }}
                className={styles.loginFormBtn}
              >
                Sign Up
              </Button>
            </div>
            <div className={styles.textCenter}>
              <span className={styles.txt1}>Already have an account?</span>
              <Link className={styles.txt2} href="/login">
                Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
