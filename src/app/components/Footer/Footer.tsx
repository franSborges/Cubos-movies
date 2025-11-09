'use client';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.allRightsReservedText}>
        2025 © Todos os direitos reservados a <strong>Cubos Movies</strong>
      </p>
    </footer>
  );
};

export default Footer;
