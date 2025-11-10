import Image from "next/image";
import styles from "./page.module.css";
import backgroundImage from "./../../../public/loginBackground.svg"
import LoginModal from "../components/LoginModal/Modal";

const LoginPage = () => {
  return (
      <main className={styles.main}>
        <Image
          src={backgroundImage}
          alt="Imagem de background"
        />
        <div className={styles.loginContent}>
         <LoginModal />
        </div>
      </main>
  );
}


export default LoginPage;