import Image from "next/image";
import styles from "./page.module.css";
import backgroundImage from "./../../../public/loginBackground.svg"
import SignupModal from "../components/signupModal/Modal";

const SignupPage = () => {
  return (
      <main className={styles.main}>
        <Image
          src={backgroundImage}
          alt="Imagem de background"
        />
        <div className={styles.loginContent}>
         <SignupModal />
        </div>
      </main>
  );
}


export default SignupPage;