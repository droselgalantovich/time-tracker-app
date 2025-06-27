import styles from './Login.module.css';

import GoogleIcon from '../../assets/Login/GoogleIcon.png';
import Logo from '../../assets/Login/LogoLogin.png';
import BgLogin from '../../assets/Login/BgLogin.png';

const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="logo" />
          <img className={styles.bgLogin} src={BgLogin} alt="logo" />
        </div>
        <h1 className={styles.title}>Sign in to your account</h1>
        <button className={styles.googleButton}>
          <img src={GoogleIcon} alt="google" />
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
