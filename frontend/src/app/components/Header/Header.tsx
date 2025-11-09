"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import cubosLogoDesk from "./../../../../public/cubos-logo.svg";
import cubosLogoMob from "./../../../../public/cubos-logo-mob.svg";
import themeIcon from "./../../../../public/theme-icon.svg";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const logoSrc = isMobile ? cubosLogoMob : cubosLogoDesk;

    return (
        <header className={styles.headerCubosMovie}>
            <Image
                src={logoSrc}
                alt="Logo"
                width={isMobile ? 100 : 150}
                height={isMobile ? 100 : 150}
                style={{ cursor: "pointer" }}
            />
            <div className={styles.iconsContent}>
                <Image
                    src={themeIcon}
                    alt="Logo"
                    style={{ cursor: "pointer" }}
                />
                <button className={styles.logoutButton}>Logout</button>
            </div>
        </header>
    )
}