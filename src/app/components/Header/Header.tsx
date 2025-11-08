/* eslint-disable @next/next/no-img-element */
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.headerCubosMovie}>
            <img
                src="/cubos-logo.svg"
                alt="Logo da Cubos Movies"
                style={{ cursor: "pointer" }}
                className={styles.cubosLogo}
            />
            <div className={styles.iconsContent}>

                <img
                    src="/theme-icon.svg"
                    alt="Ícone para mudar o tema, para mudar o tema entre dark e light"
                    style={{ cursor: "pointer" }}
                    className={styles.themeIcon}
                />
                <button className={styles.logoutButton}>Logout</button>
            </div>
        </header>
    )
}